import Image from "next/image"
import { Search} from 'lucide-react'

type UploadItem = {
  img: string;
}

type LibraryItem = {
  title: string;
  count: number;
}

const recentUploads: UploadItem[] = [
  {img: "/recentUploads/one.png"},
  {img: "/recentUploads/two.png"},
  {img: "/recentUploads/three.png"},
  {img: "/recentUploads/four.png"},
]

const libraryItems: LibraryItem[] = [
  {title: "Getting Started", count: 12},
  {title: "Frontend Development", count: 25},
  {title: "Backend Development", count: 18},
  {title: "UI/UX", count: 15},
  {title: "Mobile development", count: 20}
]

const Sidebar = () => {

  return (
    <div className=" w-full bg-white rounded-lg px-8 mt-[2.5rem]">
    <div className="mb-6 relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search library..."
        className=" text-gray-500 w-full h-[42px] pl-10 pr-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
      />
    </div>

    <div className="mb-6">
      <h2 className="text-xl sm:text-2xl font-bold">Library</h2>
      <ul className="mt-4 space-y-2">
        {libraryItems.map((item, index) => (
          <li
            key={index}
            className="pl-3 flex justify-between h-[48px] items-center text-sm text-gray-800"
          >
            <span>{item.title}</span>
            <span>{item.count}</span>
          </li>
        ))}
      </ul>
    </div>


    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-3">Recent Uploads</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-7">
        {recentUploads.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 h-[80px]">
            <Image
              src={item.img}
              alt="Recent Upload"
              width={120}
              height={80}
              className="rounded-md"
            />

            <div>
              <p className="text-sm font-medium">Advanced CSS Techniques</p>
              <p className="text-xs text-gray-500">Added 2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

)
}

export default Sidebar