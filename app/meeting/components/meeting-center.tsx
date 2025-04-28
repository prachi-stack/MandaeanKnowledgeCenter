import MeetingRoomCard from "./meeting-room-card"

const MeetingCenter = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold mb-4">Meeting Center</h2>
      <div className="flex flex-col md:flex-row gap-4  ">
        <MeetingRoomCard
          room="1"
          available={true}
          capacity="12 people"
          equipment="Projector, Whiteboard"
          hasInput
        />
        <MeetingRoomCard
          room="2"
          available={false}
          capacity="8 people"
          equipment="TV Screen, Conference Phone"
          statusInfo="Product Team (ends 15:30)"
          nextAvailable="Today at 15:30"
        />
      </div>
    </section>
  )
}

export default MeetingCenter
