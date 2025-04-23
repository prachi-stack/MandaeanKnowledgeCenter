import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame, Clock, Award} from "lucide-react"

interface Stat {
  label: string
  value: string
}

interface Performance {
  label: string
  value: number
  className?: string
}

 

const stats: Stat[] = [
  { label: "Total Courses", value: "6" },
  { label: "Completed", value: "2" },
  { label: "In Progress", value: "4" },
]

const performance: Performance[] = [
  { label: "Development", value: 78 },
  { label: "Design", value: 90, className: "bg-green-500" },
]


export default function ProfileStats() {
  return (
    <Card className="w-full max-w-sm p-6">
      <CardContent className="space-y-5 p-0">
        {/* Top Stats */}
        <div className="space-y-2">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Average Score */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Average Score</p>
          <p className="text-xl font-bold text-blue-600">83.8%</p>
        </div>

        {/* Overall Progress */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Overall Progress</p>
          <Progress value={65} />
          <p className="text-xs text-muted-foreground mt-1">65% Complete — 35% Remaining</p>
        </div>

        {/* Performance by Category */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Performance by Category</p>
          <div className="space-y-2">
            {performance.map((item, index) => (
              <div key={index}>
                <p className="text-xs text-gray-500">{item.label}</p>
                <Progress value={item.value} className={item.className} />
              </div>
            ))}
          </div>
        </div>
        <h2 className="font-bold">Learning Strak</h2>
        <div className="flex justify-between items-center mt-2">
        <div>
          <Flame className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-gray-500 font-medium">5 dnyw</span>
         </div>
         <div>
          <Clock className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-gray-500 font-medium">12.5hre</span>
         </div>
         <div>
          <Award className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-gray-500 font-medium">Badges</span>
         </div>
        </div>
          
        
      </CardContent>
    </Card>
  )
}
