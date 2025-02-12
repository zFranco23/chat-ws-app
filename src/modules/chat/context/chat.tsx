import { createContext } from "react";
import { Message, RoomHistorial } from "../types/chat";

export interface ChatContextType {
  handleJoinRoom: (roomName: string) => void;
  handleLeaveRoom: () => void;
  handleSendMessage: (text: string) => void;
  username: string;
  setUsername: (name: string) => void;
  messages: Message[];
  room: string;
  socketId: string;
  roomHistorial: RoomHistorial[];
  startTyping: () => void;
  stopTyping: () => void;
  usersTyping: RoomHistorial[];
}

export const ChatContext = createContext<ChatContextType | null>(null);
