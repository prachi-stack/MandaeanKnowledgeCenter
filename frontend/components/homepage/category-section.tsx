import Image from "next/image"

type Category = {
    name: string;
    icon: string;
}

const categories: Category[] =[
{name: "Courses", icon:"/categoryIcons/courses.png"},
{name: "Library", icon:"/categoryIcons/library.png"},
{name: "Forum", icon:"/categoryIcons/forum.png"},
{name: "Request Meeting", icon:"/categoryIcons/reqmeeting.png"},
{name: "Browse", icon:"/categoryIcons/browse.png"},
{name:"My Learning", icon:"/categoryIcons/mylearn.png"}
]

const CategorySection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-12">
        {categories.map((cat, index) => (
            <button key={index} className="flex items-center gap-2 px-4 py-2 border rounded-3xl">
                <Image src={cat.icon} alt={cat.name} width={20} height={20} />
                <span className="text-sm font-medium">{cat.name}</span>
            </button>
        ))}
    </div>
  )
}

export default CategorySection