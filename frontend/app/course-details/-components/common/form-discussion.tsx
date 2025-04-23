import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import {MessageSquareMore, Heart} from "lucide-react"

const FormDiscussion = () => {
  return (
    <div>
      <h2>FormDiscussion</h2>
      <Textarea placeholder="Share your thoughts or questions about this lesson.." />
      <div className="flex items-center justify-between">
      <Button size="sm" className="bg-blue-500 text-white sm:px-4">Submit Question</Button>
      <div className="flex items-center justify-center gap-4">
      <div className="flex items-center gap-1">
            <MessageSquareMore className="w-4 h-4" />
            <span>Comments;0</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>Likes:25</span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default FormDiscussion