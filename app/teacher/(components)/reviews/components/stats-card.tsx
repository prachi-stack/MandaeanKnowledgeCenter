import { Quote, StarOff, TrendingDown, TrendingUp, UserRoundCog } from "lucide-react"
import type { ReactElement } from "react"

type stat = {
    icon: ReactElement
    title: string
    total: string
    trending: ReactElement
}

const stats: stat[] = [
    { icon: <UserRoundCog />, title: "Average Rating", total: "4,3/5", trending: <TrendingDown className="text-orange-300" /> },
    { icon: <Quote fill="black" />, title: "Total Reviews", total: "1,831", trending: <TrendingUp className="text-lime-300" /> },
    { icon: <StarOff />, title: "Rating Change", total: "0.5%", trending: <TrendingUp className="text-lime-300" /> }

]

const Statscard = () => {
    return (
        <div className="flex justify-between">
            {stats.map((Stat, idx) => (
                <div key={idx} className="p-2 shadow flex justify-between space-x-17">
                    <div className="space-y-2">
                        {Stat.icon}
                        <p className="font-medium text-sm">{Stat.title}</p>
                    </div>
                    <div className="space-y-2 text-lg">
                        {Stat.title != "Average Rating"?(<p className="text-emerald-400 font-medium">{Stat.total}</p>):( <p className="text-blue-500  font-medium">{Stat.total}</p>)}
                        {Stat.trending}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Statscard