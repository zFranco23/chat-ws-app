import { useChat } from "../hooks/use-chat-context";
import { motion } from "framer-motion";

const UsersTyping = () => {
  const { usersTyping } = useChat();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2 p-2 text-gray-900 rounded-bl-none rounded-lg bottom-0 left-0 absolute w-full max-w-fullk"
      >
        <div className="text-sm">
          {usersTyping.length > 0 && (
            <div className="flex flex-column items-center gap-2">
              {usersTyping.map((user) => (
                <div key={user.username} className="mb-1 text-gray-500">
                  {user.username} is typing
                </div>
              ))}
              <div className="flex gap-1 text-gray-500">
                <span className="animate-bounce delay-75 w-2 h-2 bg-gray-500 rounded-full"></span>
                <span className="animate-bounce delay-150 w-2 h-2 bg-gray-500 rounded-full"></span>
                <span className="animate-bounce delay-300 w-2 h-2 bg-gray-500 rounded-full"></span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default UsersTyping;
