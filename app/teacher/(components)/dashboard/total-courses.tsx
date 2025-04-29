import { TrendingUp } from "lucide-react"

const info = [
    {title: "Active Students", number: "400"},
    {title: "Asssignments to Review", number: "5"},
    {title: "Hours taught", number: "14hr"}
]

const TotalCourses = () => {
    return (
        <div className="flex flex-col space-y-5">
            <div className="flex justify-between">
            <h1 className="font-semibold text-lg">Total Courses</h1>
            <TrendingUp />
            </div>
            <div className="flex gap-12">
            {info.map((i, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-3">
                    <p className="text-sm">{i.title}</p>
                    <p className="text-lg">{i.number}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default TotalCourses