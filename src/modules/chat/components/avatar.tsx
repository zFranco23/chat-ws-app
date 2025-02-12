import { useState } from "react";
import { CircleUserRound } from "lucide-react";
import UserModal from "./user-name-modal";

const Avatar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex">
      {open && <UserModal onSave={() => setOpen(false)} />}
      <button onClick={() => setOpen((ps) => !ps)}>
        <CircleUserRound className="text-white hover:text-blue-500" />
      </button>
    </div>
  );
};

export default Avatar;
