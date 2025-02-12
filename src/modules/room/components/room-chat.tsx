"use client";

import React, { useEffect, useState } from "react";
import MessageList from "./message-list";
import MessageInput from "./message-input";
import ChatDisclaimerDialog from "@/modules/chat/components/chat-disclaimer-dialog";
import CopyToClipboard from "./copy-to-clipboard";
// import CopyToClipboard from "./copy-to-clipboard";

interface RoomChatProps {
  roomId: string;
}

const RoomChat = ({ roomId }: RoomChatProps) => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    setIsOpenDialog(true);
  }, []);

  const getShareLink = () => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  };

  const shareLink = getShareLink();
  return (
    <>
      {isOpenDialog && (
        <ChatDisclaimerDialog onAccept={() => setIsOpenDialog(false)} />
      )}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          Room: {roomId}
        </h2>

        {/* Copy to clipboard button and show toast */}
        <CopyToClipboard text={shareLink} />
      </div>
      <MessageList />
      <MessageInput />
    </>
  );
};

export default RoomChat;
