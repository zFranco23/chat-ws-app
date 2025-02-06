import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  setUsername: (name: string) => void;
};

const UserModal = ({ setUsername }: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <Dialog open={true}>
      <DialogContent className="text-center">
        <DialogHeader>
          <DialogTitle>Your name:</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Optional (default: Anonymus)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={() => setUsername(name.trim() || "Anonymus")}>
          Entrar
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
