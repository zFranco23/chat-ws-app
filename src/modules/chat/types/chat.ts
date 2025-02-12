export type Message = {
  id: string;
  text: string;
  sender: string;
  username: string;
  timestamp: string;
};

export type RoomAction = "join" | "leave";
export interface RoomHistorial {
  room: string;
  username: string;
  action: RoomAction;
}
