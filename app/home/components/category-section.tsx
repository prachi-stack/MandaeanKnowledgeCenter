import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Category = {
    name: string;
    icon: string;
    path: string;
}

const categories: Category[] = [
  { name: "Courses", icon: "/categoryIcons/courses.png", path: "/courses" },
  { name: "Library", icon: "/categoryIcons/library.png", path: "/library" },
  { name: "Forum", icon: "/categoryIcons/forum.png", path: "/forum" },
  { name: "Request Meeting", icon: "/categoryIcons/reqmeeting.png", path: "/meeting" },
  { name: "Browse", icon: "/categoryIcons/browse.png", path: "/browse" },
  { name: "My Learning", icon: "/categoryIcons/mylearn.png", path: "/my-learning" },
]


const CategorySection = () => {
  return (
    <div className="flex flex-wrap  justify-center gap-2 sm:gap-4 my-12">
        {categories.map((cat, index) => (
          <Link href={cat.path} key={index}>
            <Button key={index} size="sm"  className="flex items-center gap-2 sm:px-3 border rounded-3xl">
                <Image src={cat.icon} alt={cat.name} width={20} height={20} />
                <span>{cat.name}</span>
            </Button>
            </Link>
        ))}
    </div>
  )
}

export default CategorySection