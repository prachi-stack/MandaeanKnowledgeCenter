import { Image, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type StudentLocation = {
  country: string
  count: number
  percentage: number
}

const studentData: StudentLocation[] = [
  { country: "Indonesia", count: 3551, percentage: 30 },
  { country: "Vietnam", count: 2951, percentage: 20 },
  { country: "United States", count: 2125, percentage: 15 },
]

export default function TopStudentLocation() {
  return (
    <Card className="w-full border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Top Student Location</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {studentData.map((location) => (
          <div key={location.country} className="relative">
            <div 
              className="absolute inset-0 bg-green-100 rounded-md" 
              style={{ width: `${location.percentage * 3}%` }} 
            />
            <div className="relative flex items-center p-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6">
                  <Image />
                 </div>
                <span className="text-sm text-gray-700">{location.country}</span>
              </div>
              
              {/* This will position the icon and count at the right edge of the green background */}
              <div className="absolute" style={{ left: `${location.percentage * 3 - 5}%` }}>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium">{location.count.toLocaleString()}</span>
                </div>
              </div>
              
              {/* Percentage stays at the far right */}
              <div className="ml-auto">
                <span className="text-sm text-gray-500">{location.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}