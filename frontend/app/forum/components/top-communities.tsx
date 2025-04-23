import { Button } from "../../../components/ui/button"

interface Community {
  name: string;
  members: string;
}

const topCommunities: Community[] = [
  {name: "TechTalks", members: "2.1M"},
  {name: "DigitalArt" , members: "1.8M"},
  {name: "GameDev", members: "1.5M"},
]

const TopCommunities = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <h3 className="text-md font-semibold mb-4">Top Communities</h3>
      <ul className="space-y-4">
        {topCommunities.map((com, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">
                {idx + 1}. {com.name}
              </p>
              <p className="text-xs text-gray-500">{com.members} members</p>
            </div>
            <Button size="sm" className="bg-blue-800 rounded-xl text-white sm:px-4" variant="outline">Join</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopCommunities