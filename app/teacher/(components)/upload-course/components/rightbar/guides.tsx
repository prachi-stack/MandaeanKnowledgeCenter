import { Play } from 'lucide-react'
interface GuideItem {
  title: string
}

export default function GuideSection() {
    const guides: GuideItem[] = [
      {
        title: "How to Upload Your Course Correctly",
      },
      {
        title: "The Complete Way to Organize Your Course Content",
      },
      {
        title: "How to Get More Impressions on Your Course",
      },
    ];
  
    return (
      <div className="space-y-4 bg-[#F7F7F7B2]/70 p-4 rounded-md">
        <h2 className="text-lg font-semibold">Guides</h2>
        <div className="flex flex-col space-y-3">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl w-full flex items-center gap-4 px-4 py-3 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 shrink-0">
                <Play className="h-4 w-4 fill-white text-white" />
              </div>
              <p className="text-sm text-[#3F3F44]">{guide.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  