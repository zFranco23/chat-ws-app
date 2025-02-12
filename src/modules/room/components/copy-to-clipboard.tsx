import { CheckCircle, Share2 } from "lucide-react";
import { useState } from "react";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard = ({ text }: CopyToClipboardProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="relative h-[40px] w-[40px]">
      <button
        onClick={handleCopy}
        className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500 transition-colors duration-200 rounded-full"
      >
        {isCopied ? (
          <CheckCircle size={18} className="animate-ping" />
        ) : (
          <Share2 size={18} />
        )}
      </button>
    </div>
  );
};

export default CopyToClipboard;
