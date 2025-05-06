 import { Card, CardContent } from "@/components/ui/card"
import { MoreVertical } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function WeeklyStatistic() {
  const stats = [
    { name: "UI/UX Design", percentage: 59 },
    { name: "Design Tips", percentage: 87 },
    { name: "Productivity", percentage: 71 },
  ]

  return (
    <Card className="w-full max-w-md rounded-2xl shadow p-4 border-none">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Weekly Statistic</h1>
        <MoreVertical className="text-gray-500" />
      </div>
      <div className="space-y-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center">
              <p className="text-sm font-medium text-lime-600">{stat.percentage}%</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{stat.name}</p>
              <div className="bg-gray-200 rounded ">
              <Progress className="h-2 mt-1 bg-blue-600"  style={{ width: `${stat.percentage}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
