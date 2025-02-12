import { useChat } from "@/modules/chat/hooks/use-chat-context";

export const useRoom = () => {
  const { room, handleJoinRoom, handleLeaveRoom, handleSendMessage } =
    useChat();

  return {
    room,
    handleJoinRoom,
    handleLeaveRoom,
    handleSendMessage,
  };
};
