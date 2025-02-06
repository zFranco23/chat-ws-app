import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import VoiceTranscription from "./voice-transcription";

type Props = {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
  handleListening: () => void;
  isListening: boolean;
};

const MessageInput = ({
  input,
  setInput,
  sendMessage,
  handleListening,
  isListening,
}: Props) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessage();
    }
  };
  return (
    <div className="flex gap-3 items-center">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message..."
        onKeyUp={handleKeyUp}
        className="flex-1 px-4 py-2 border rounded-full shadow-sm focus:ring-2 focus:ring-blue-500"
      />
      <Button
        onClick={sendMessage}
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
      >
        <Send size={18} />
      </Button>

      <VoiceTranscription
        handleListening={handleListening}
        isListening={isListening}
      />
    </div>
  );
};

export default MessageInput;
