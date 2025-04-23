import CurrentVideo from "../../../../components/course-details/current-video"
import FormDiscussion from "../../../../components/course-details/form-discussion"
import Quiz from "../../../../components/course-details/quiz"
import CourseActions from "../../../../components/course-details/course-actions"
import YourProgress from "../../../../components/course-details/your-progress"

const Video = () => {
  return (
    <div className="flex">
      <div>
        <CurrentVideo />
        <FormDiscussion />
        <Document />
        <Quiz />
      </div>
      <div>
        <CourseActions />
        <YourProgress />

      </div>
    </div>
  )
}

export default Video