import {Clock, GraduationCap, ShoppingBag } from "lucide-react"

export default function StatsOverview() {
  return (
    <div className="flex justify-between mb-8">
       <div className="flex justify-between items-start shadow px-3 py-1">
        <div className="space-y-3">
        <ShoppingBag className="" size= {25} />
        <p className="text-sm font-medium w-28">Course Views</p>
        </div>
        <h3 className="text-xl text-blue-700">2,714</h3>
      </div>

      <div className="flex justify-between items-start shadow px-3 py-1">
        <div className="space-y-3">
        <Clock className="" size= {25} />
        <p className="text-sm font-medium w-28">Average Watch Time</p>
        </div>
        <h3 className="text-xl text-emerald-500">$32,821</h3>
      </div>

      <div className="flex justify-between items-start shadow px-3 py-1">
        <div className="space-y-3">
        <GraduationCap className="" size= {25} />
        <p className="text-sm font-medium w-28">Course Completion Rate</p>
        </div>
        <h3 className="text-xl text-emerald-500">75%</h3>
      </div>
    </div>
  )
}
