import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { useChat } from "../hooks/use-chat-context";
import { useState } from "react";

interface VoiceTranscriptionProps {
  setMessage: (text: string) => void;
}
const VoiceTranscription = ({ setMessage }: VoiceTranscriptionProps) => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const {} = useChat();

  const handleListening = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      setIsListening(true);

      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "es-ES";
      recognition.start();
      recognition.onresult = (event: {
        results: SpeechRecognitionResultList;
      }) => {
        setMessage(event.results[0][0].transcript);
        setIsListening(false);
      };
    }
  };

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
