import { Button } from "@/components/ui/button"
import GuideSection from "../upload-course/components/rightbar/guides"
import TeacherHandbook from "../upload-course/components/rightbar/teacher-handbook"
import CreateQuiz from "./_components/create-quiz"
import { Plus } from "lucide-react"

 const page = () => {
     return (
       <div className='flex space-x-8'>
         <div className='flex-[2]'>
             <CreateQuiz />
             <div className="flex justify-end my-10">
                <Button size="sm" className="bg-blue-600 text-white"><Plus />Submit Quiz</Button>
             </div>
         </div>
         <div className='flex-[1] space-y-10'>
            <GuideSection />
            <TeacherHandbook />
        </div>
       </div>
     )
   }
   
   export default page