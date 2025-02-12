"use client";

import RoomSelector from "../components/room-selector";
import UserModal from "../components/user-name-modal";

import { Card, CardContent } from "@/components/ui/card";

import { useChat } from "../hooks/use-chat-context";

const ChatPage = () => {
  const { username } = useChat();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {!username ? (
        <UserModal />
      ) : (
        <Card className="w-full max-w-xl mx-auto p-5 shadow-xl border rounded-2xl bg-white">
          <CardContent className="flex flex-col space-y-4">
            <RoomSelector />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatPage;
