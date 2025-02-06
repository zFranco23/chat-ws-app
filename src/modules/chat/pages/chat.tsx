"use client";
import MessageInput from "../components/message-input";
import MessageList from "../components/message-list";
import RoomSelector from "../components/room-selector";
import UserModal from "../components/user-name-modal";
import { useChat } from "../hooks";
import { Card, CardContent } from "@/components/ui/card";

const ChatPage = () => {
  const {
    messages,
    input,
    setInput,
    sendMessage,
    handleListening,
    isListening,
    socketId,
    username,
    joinRoom,
    room,
    setUsername,
  } = useChat();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {!username ? (
        <UserModal setUsername={setUsername} />
      ) : (
        <Card className="w-full max-w-xl mx-auto p-5 shadow-xl border rounded-2xl bg-white">
          <CardContent className="flex flex-col space-y-4">
            {!room ? (
              <RoomSelector joinRoom={joinRoom} />
            ) : (
              <>
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  Room: {room}
                </h2>
                <MessageList messages={messages} selfId={socketId} />
                <MessageInput
                  input={input}
                  setInput={setInput}
                  sendMessage={sendMessage}
                  handleListening={handleListening}
                  isListening={isListening}
                />
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatPage;
