import { Clock, Laptop} from "lucide-react";

export interface ClassInfo {
    title: string;
    instructor: string;
    time: string;
    duration: string;
  }

  export const nextClass: ClassInfo = {
      title: "UX Design Basics",
      instructor: "Sarah Johnson",
      time: "Today at 2:00 PM",
      duration: "1.5h",
    };
    
  
const NextClass = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 text-sm">
        <h3 className="font-semibold text-gray-800 mb-2 text-xl">Your Next Class</h3>
        <div className="flex space-x-4">
        <Laptop />
        <div>
        <p className="text-lg">{nextClass.title}</p>
        <p className="text-gray-500">{nextClass.instructor}</p>
        </div>
        </div>
        <div className="bg-gray-50 rounded-md">  
          <div className="flex items-center gap-2 mt-1">
            <Clock size={16} strokeWidth={3} />
            <p>
              {nextClass.time} ({nextClass.duration})
            </p>
          </div>
        </div>
      </div>
  )
}

export default NextClass