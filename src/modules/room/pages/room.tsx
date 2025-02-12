"use client";

import RoomChat from "../components/room-chat";
import { useEffect } from "react";
import { useRoom } from "../hooks/use-room";
import { Card, CardContent } from "@/components/ui/card";

interface RoomPageProps {
  roomId: string;
}

const RoomPage = ({ roomId }: RoomPageProps) => {
  const { handleJoinRoom } = useRoom();

  useEffect(() => {
    handleJoinRoom(roomId);
  }, [roomId]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Card className="w-full max-w-xl mx-auto p-5 shadow-xl border rounded-2xl bg-white">
        <CardContent className="flex flex-col space-y-4">
          <RoomChat roomId={roomId} />
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomPage;
