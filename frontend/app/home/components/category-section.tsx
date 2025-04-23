import Image from "next/image"
import Link from "next/link"

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
    <div className="flex flex-wrap justify-center gap-4 my-12">
        {categories.map((cat, index) => (
          <Link href={cat.path} key={index}>
            <button key={index} className="flex items-center gap-2 px-4 py-2 border rounded-3xl">
                <Image src={cat.icon} alt={cat.name} width={20} height={20} />
                <span className="text-sm font-medium">{cat.name}</span>
            </button>
            </Link>
        ))}
    </div>
  )
}

export default CategorySection