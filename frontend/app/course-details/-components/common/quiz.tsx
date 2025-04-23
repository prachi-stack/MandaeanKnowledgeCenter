import { Button } from "../ui/button"

const Quiz = () => {
  return (
    <div>
        <h2>Quiz</h2>
        <p>Test your knowledge with this week's assessment. Complete all questions to receive your score. </p>
        <Button size="sm" className="bg-blue-500 text-white ">Start</Button>
    </div>
  )
}

export default Quiz