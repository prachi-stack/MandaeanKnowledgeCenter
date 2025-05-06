import { ChevronRight, MessageSquareMore,} from "lucide-react"

export default function Settings() {
  return (
    <div className="">
      <div className="rounded-xl">
        <h2 className="text-lg font-medium mb-4">Settings</h2>

        <div className="bg-white rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-lime-50 rounded flex items-center justify-center">
                <MessageSquareMore  className="text-lime-500" />
             </div>
            <div>
              <h3 className="text-sm font-medium">My Message</h3>
              <p className="text-sm text-gray-500">Inbox and draft</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
