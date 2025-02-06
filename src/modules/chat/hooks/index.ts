import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Message } from "../types/chat";

const socket = io("http://localhost:5000");

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

recognition.lang = "es-ES";

export const useChat = () => {
  const [socketId, setSocketId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);

  useEffect(() => {
    socket.on("connect", () => {
      if (socket.id) setSocketId(socket.id);
    });

    socket.on("receive-message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    recognition.onresult = (event: { results: SpeechRecognitionResult[] }) => {
      setInput(event.results[0][0].transcript);
      setIsListening(false);
    };
  }, []);

  const joinRoom = (roomName: string) => {
    setRoom(roomName);
    setMessages([]);
    socket.emit("join-room", roomName);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: new Date().getTime().toString(),
      sender: socketId,
      text: input,
      username,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    socket.emit("send-message", { room, message: newMessage });
    setInput("");
    setIsListening(false);
  };

  const handleListening = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
    handleListening,
    socketId,
    joinRoom,
    room,
    username,
    setUsername,
    isListening,
  };
};
