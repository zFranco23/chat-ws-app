import RoomPage from "@/modules/room/pages/room";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <RoomPage roomId={id} />;
}
