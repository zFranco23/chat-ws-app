import { Message } from "../types/chat";
import classNames from "classnames";
import { motion } from "framer-motion";

type Props = { messages: Message[]; selfId: string };

const MessageList = ({ messages, selfId }: Props) => {
  return (
    <div className="h-96 overflow-y-auto p-3 space-y-3 bg-gray-50 rounded-lg shadow-inner">
      {messages.map((msg) => {
        const isMine = msg.sender === selfId;

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
  );
};

export default MessageList;
