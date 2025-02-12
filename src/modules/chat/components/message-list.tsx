import classNames from "classnames";
import { motion } from "framer-motion";
import { useChat } from "../hooks/use-chat-context";
import usePrevious from "@/hooks/use-previous";
import { useEffect } from "react";
import { toast } from "sonner";
import UsersTyping from "./users-typing";

const MessageList = () => {
  const { messages, socketId, roomHistorial } = useChat();

  const previousHistorial = usePrevious(roomHistorial);

  useEffect(() => {
    if (previousHistorial && previousHistorial.length < roomHistorial.length) {
      const lastHistorial = roomHistorial[roomHistorial.length - 1];
      toast(`User ${lastHistorial.username} ${lastHistorial.action} the room`);
    }
  }, [previousHistorial, roomHistorial]);

  return (
    <div className="relative">
      <div className="h-96 overflow-y-auto p-3 space-y-3 bg-gray-50 rounded-lg shadow-inner">
        {messages.map((msg) => {
          const isMine = msg.sender === socketId;

          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={classNames(
                "flex items-center gap-2",
                isMine ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={classNames(
                  "px-4 pt-2 max-w-[80%] text-sm rounded-xl shadow-md",
                  isMine
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                )}
              >
                <div>{msg.text}</div>

                <span
                  className={classNames(
                    "text-[8px]",
                    isMine ? "text-white" : "text-gray-500"
                  )}
                >
                  {msg.timestamp}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <UsersTyping />
    </div>
  );
};

export default MessageList;
