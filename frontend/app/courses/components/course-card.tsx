import { FC } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

export interface CourseCardProps {
    teacher: string;
    education: string;
    title: string;
    description: string;
    rating: number;
    reviews: number;
    lessons: number;
    hours: number;
    badge: string;
    avatarColor: string; // e.g., "bg-purple-500"
}

const CourseCard: FC<CourseCardProps> = ({
    teacher,
    education,
    title,
    description,
    rating,
    reviews,
    lessons,
    hours,
    badge,
    avatarColor,
}) => {
    return (
        <Card className="p-4 w-full">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <div
                        className={`rounded-3xl w-10 h-10 flex items-center justify-center text-white font-semibold ${avatarColor}`}
                    >
                        <UserRound />
                    </div>
                    <div>
                    <div className="text-sm text-gray-700">{teacher}</div>
                        <div className="text-xs text-gray-500">{education}</div>
                    </div>
                </div>
                {badge && <Badge variant="secondary">{badge}</Badge>}
            </div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <div className="flex items-center text-sm text-gray-700 space-x-1">
               <span className="flex text-yellow-500 text-sm"> {'★'.repeat(4)}{'☆'}</span>
                <span>{rating}</span>
                <span>({reviews} reviews)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-sm text-gray-500 mb-4">
                {lessons} lessons - {hours} hours
                <Button className=" bg-blue-600 hover:bg-blue-700 text-white px-2 ">
                Enroll Now
            </Button>
            </div>
            
        </Card>
    );
};

export default CourseCard;
