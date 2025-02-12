"use client";

import React, { useEffect, useState } from "react";
import MessageList from "./message-list";
import MessageInput from "./message-input";
import ChatDisclaimerDialog from "@/modules/chat/components/chat-disclaimer-dialog";

interface RoomChatProps {
  roomId: string;
}

const RoomChat = ({ roomId }: RoomChatProps) => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    setIsOpenDialog(true);
  }, []);

  return (
    <>
      {isOpenDialog && (
        <ChatDisclaimerDialog onAccept={() => setIsOpenDialog(false)} />
      )}
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        Room: {roomId}
      </h2>
      <MessageList />
      <MessageInput />
    </>
  );
};

export default RoomChat;
