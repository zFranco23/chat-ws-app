import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

interface VoiceTranscriptionProps {
  handleListening: () => void;
  isListening: boolean;
}
const VoiceTranscription = ({
  handleListening,
  isListening,
}: VoiceTranscriptionProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleListening}
      className="p-2 rounded-full"
    >
      {isListening ? (
        <Mic size={18} className="animate-spin" />
      ) : (
        <Mic size={18} />
      )}
    </Button>
  );
};

export default VoiceTranscription;
