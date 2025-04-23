import { Button } from "@/components/ui/button"

interface UpcomingMeetingItemProps {
  title: string
  room: string
  time: string
  canJoin?: boolean
}

const UpcomingMeetingItem = ({ title, room, time, canJoin }: UpcomingMeetingItemProps) => {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">
          {room} · {time}
        </p>
      </div>
      <Button variant={canJoin ? "default" : "outline"} disabled={!canJoin}>
        {canJoin ? "Join" : "Schedule"}
      </Button>
    </div>
  )
}

export default UpcomingMeetingItem
