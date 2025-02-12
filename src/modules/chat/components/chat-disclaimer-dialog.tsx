import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRoom } from "@/modules/room/hooks/use-room";
import { useRouter } from "next/navigation";

interface ChatDisclaimerDialogProps {
  onAccept: VoidFunction;
}
const ChatDisclaimerDialog = ({ onAccept }: ChatDisclaimerDialogProps) => {
  const router = useRouter();
  const { handleLeaveRoom } = useRoom();

  const onLeaveRoom = () => {
    router.push("/");
    handleLeaveRoom();
  };
  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Room rules</AlertDialogTitle>
          <AlertDialogDescription>
            Please be aware what you are typing in the chat.
            <br />
            This is a private room.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onLeaveRoom}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onAccept}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ChatDisclaimerDialog;
