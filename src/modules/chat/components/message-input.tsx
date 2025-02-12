import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useState } from "react";
import { useChat } from "../hooks/use-chat-context";
import VoiceTranscription from "./voice-transcription";

const MessageInput = () => {
  const [text, setText] = useState<string>("");

  const { handleSendMessage, startTyping, stopTyping } = useChat();

  const sendGlobalMessage = () => {
    handleSendMessage(text);
    setText("");
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendGlobalMessage();
    }
  };

  return (
    <div className="flex gap-3 items-center">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Send a message..."
        onKeyUp={handleKeyUp}
        onFocus={startTyping}
        onBlur={stopTyping}
        className="flex-1 px-4 py-2 border rounded-full shadow-sm focus:ring-2 focus:ring-blue-500"
      />
      <Button
        onClick={sendGlobalMessage}
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
      >
        <Send size={18} />
      </Button>

      <VoiceTranscription setMessage={setText} />
    </div>
  );
};

export default MessageInput;
