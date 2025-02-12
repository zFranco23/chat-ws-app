"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { ChatContext } from "../context/chat";
import { io } from "socket.io-client";
import { Message, RoomHistorial } from "../types/chat";

const socket = io(process.env.NEXT_PUBLIC_WS_SERVER_API_URL);

const ChatProvider = ({ children }: PropsWithChildren) => {
  const [socketId, setSocketId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const [room, setRoom] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  // typeof localStorage !== "undefined"
  //   ? localStorage.getItem("username") ?? ""
  //   : ""

  const [usersTyping, setUsersTyping] = useState<RoomHistorial[]>([]);

  const [roomHistorial, setRoomHistorial] = useState<RoomHistorial[]>([]);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      const socketId = socket.id;
      setSocketId(socketId ?? "");
    });

    socket.on("receive-message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    socket.on("user-joined", (historial: RoomHistorial) => {
      setRoomHistorial((prev) => [...prev, historial]);
    });

    socket.on("user-left", (historial: RoomHistorial) => {
      setRoomHistorial((prev) => [...prev, historial]);
    });

    socket.on("user-typing", (historial: RoomHistorial) => {
      setUsersTyping((prev) => [...prev, historial]);
    });

    socket.on("user-stop-typing", (historial: RoomHistorial) => {
      setUsersTyping((prev) =>
        prev.filter((item) => item.username !== historial.username)
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleJoinRoom = (roomName: string) => {
    setRoom(roomName);
    setMessages([]);
    socket.emit("join-room", { username, room: roomName });
  };

  const handleLeaveRoom = () => {
    setRoom("");
    setMessages([]);
    setRoomHistorial([]);
    socket.emit("leave-room", { username, room });
  };

  const handleSetUsername = (name: string) => {
    setUsername(name);
    if (localStorage) localStorage.setItem("username", name);

    // socket.emit("set-username", { username: name });
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: new Date().getTime().toString(),
      sender: socketId,
      text,
      username,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    socket.emit("send-message", { room, message: newMessage });
  };

  const startTyping = () => {
    socket.emit("typing", { room, username });
  };

  const stopTyping = () => {
    socket.emit("stop-typing", { room, username });
  };

  return (
    <ChatContext.Provider
      value={{
        socketId,
        handleSendMessage,
        username,
        setUsername: handleSetUsername,
        messages,
        room,
        handleJoinRoom,
        handleLeaveRoom,
        roomHistorial,
        startTyping,
        stopTyping,
        usersTyping,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
