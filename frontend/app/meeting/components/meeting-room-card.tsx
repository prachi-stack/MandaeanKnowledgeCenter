import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"

interface MeetingRoomCardProps {
  room: string
  available: boolean
  capacity: string
  equipment: string
  statusInfo?: string
  nextAvailable?: string
  hasInput?: boolean
}

const MeetingRoomCard = ({
  room,
  available,
  capacity,
  equipment,
  statusInfo,
  nextAvailable,
  hasInput = false,
}: MeetingRoomCardProps) => {
  return (
    <div className="border p-4 rounded-lg flex-1">
      <h4 className="text-lg font-semibold mb-2">{room}</h4>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Status</span>
        <Badge variant={available ? "success" : "destructive"}>
          {available ? "Available" : "In Use"}
        </Badge>
      </div>
      <p className="text-sm mb-1">Capacity: {capacity}</p>
      <p className="text-sm mb-1">Equipment: {equipment}</p>
      {statusInfo && <p className="text-sm mb-1">Current: {statusInfo}</p>}
      {nextAvailable && <p className="text-sm mb-3 text-muted-foreground">Next: {nextAvailable}</p>}
      {hasInput && (
        <Input type="text" placeholder="Enter access code" className="mb-2" />
      )}
      <Button className="w-full" disabled={!available} variant={available ? "default" : "outline"}>
        {available ? (
          "Join Meeting"
        ) : (
          <>
            <Lock className="w-4 h-4 mr-2" />
            Currently Unavailable
          </>
        )}
      </Button>
    </div>
  )
}

export default MeetingRoomCard
