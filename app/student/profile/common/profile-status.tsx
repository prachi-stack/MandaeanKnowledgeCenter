import { Progress } from "@/components/ui/progress"
import { Flame, Clock, Award } from "lucide-react"

export default function ProfileStats() {
  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="space-y-5">
        <div className="space-y-4 text-gray-400">
          <div className="flex justify-between">
            <p className="font-medium">Total Courses</p>
            <p className="font-medium text-lg text-gray-800">6</p>
          </div>
          <div className="flex justify-between">
            <p>Completed</p>
            <p className="text-green-500 font-medium text-lg">2</p>
          </div>
          <div className="flex justify-between">
            <p>In Progress</p>
            <p className="font-medium text-lg text-orange-500">4</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-medium">Average Scora</p>
          <p className="font-medium text-sky-300 pr-3 text-lg">83.8%</p>
        </div>

        <div>
          <p className=" text-gray-400 text-base mb-2">Overall Prograss</p>
          <div className="bg-gray-200 rounded shadow-sm h-3">
            <Progress className="w-[65%] h-3 bg-sky-600 shadow-sm shadow-sky-600" />
          </div>
          <p className="mt-1 text-gray-400 flex justify-between"><span className="font-medium">65% Complete </span><span>35% Remaining</span></p>
        </div>

        <div className="text-gray-500">
          <p className="text-base mb-3">Parformance by Catogory</p>
          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex justify-between">
                <p className="text-gray-400 text-sm">Development</p>
                <p>78%</p>
              </div>
              <div className="bg-gray-200 rounded shadow-sm">
                <Progress className="w-[78%] bg-blue-600 shadow-sm shadow-sky-600" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <p className="font-medium text-sm">Design</p>
                <p>90%</p>
              </div>
              <div className="bg-gray-200 rounded shadow-sm">
                <Progress className="w-[90%] bg-green-600 shadow-sm shadow-sky-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <h2 className="text-base text-gray-400">Leaming Strak</h2>
          <div className="flex justify-between mt-3 text-sm ">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 h-9 w-9 flex items-center justify-center rounded-full">
                <Flame size={17} strokeWidth={3} className="text-sky-500" />
              </div>
              <span className="text-gray-500 font-medium">5 dnyw</span>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-blue-100 h-9 w-9 flex items-center justify-center rounded-full">
                <Clock size={17} strokeWidth={3} className="text-sky-500" />
              </div>
              <span className="text-gray-500 font-medium">12.5hre</span>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-blue-100 h-9 w-9 flex items-center justify-center rounded-full">
                <Clock size={17} strokeWidth={3} className="text-sky-500" />
              </div>
              <span className="text-gray-500 font-medium">Badges</span>
            </div>
             
          </div>

        </div>


      </div>
    </div>
  )
}
