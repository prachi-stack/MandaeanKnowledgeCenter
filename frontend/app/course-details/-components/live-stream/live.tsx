import FormDiscussion from "../../../../components/course-details/form-discussion"
 import Quiz from "../../../../components/course-details/quiz"
import CourseActions from "../../../../components/course-details/course-actions"
import YourProgress from "../../../../components/course-details/your-progress"
import StreamResources from "./stream-resources"
import LiveStream from "./live-stream"
import LiveChat from "./live-chat"

const Live = () => {
  return (
    <div className="flex">
    <div>
        <LiveStream />
        <LiveChat />
        <FormDiscussion />
        <StreamResources />
        <Quiz />
    </div>
    <div>
        <CourseActions />
        <YourProgress />
        
    </div>
</div>
  )
}

export default Live