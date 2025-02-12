"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useChat } from "../hooks/use-chat-context";
import { useEffect, useState } from "react";

interface UserModalProps {
  onSave?: () => void;
}
const UserModal = ({ onSave }: UserModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const { setUsername, username } = useChat();
  const [name, setName] = useState<string>(username);

  const setGlobalUserName = () => {
    setUsername(name.trim() || "Anonymus");
    if (onSave) onSave();
    setOpen(false);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      setGlobalUserName();
    }
  };

  useEffect(() => {
    if (username) setName(username);
  }, [username]);

  return (
    <Dialog open={open}>
      <DialogContent className="text-center">
        <DialogHeader>
          <DialogTitle>Your name:</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Optional (default: Anonymus)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <Button disabled={name.trim().length === 0} onClick={setGlobalUserName}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
