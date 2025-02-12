import { useContext } from "react";
import { ChatContext, ChatContextType } from "../context/chat";

export const useChat = () => useContext(ChatContext) as ChatContextType;
