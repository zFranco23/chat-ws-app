import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  joinRoom: (roomName: string) => void;
};

const RoomSelector = ({ joinRoom }: Props) => {
  const [roomName, setRoomName] = useState("");

  return (
    <div className="flex flex-col items-center space-y-3 p-4">
      <h2 className="text-lg font-bold">Create or join to a room</h2>
      <Input
        placeholder="Room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <Button onClick={() => joinRoom(roomName)} disabled={!roomName.trim()}>
        Join
      </Button>
    </div>
  );
};

export default RoomSelector;
