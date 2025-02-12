"use client";

import { useChat } from "@/modules/chat/hooks/use-chat-context";
import { Button } from "../ui/button";
import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";
import Avatar from "@/modules/chat/components/avatar";
import { useRoom } from "@/modules/room/hooks/use-room";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { username } = useChat();
  const { room, handleLeaveRoom } = useRoom();

  const onLeaveRoom = () => {
    router.push("/");
    handleLeaveRoom();
  };
  return (
    <div className="sticky top-0 bg-primary/90 p-4 flex items-center justify-between">
      <Link href="/">
        <p className="text-white">Roomly</p>
      </Link>

      <div className="flex items-center gap-6">
        {username && <Avatar />}
        {room && (
          <Button variant="secondary" onClick={onLeaveRoom}>
            <ArrowLeftToLine />
            Leave room
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
