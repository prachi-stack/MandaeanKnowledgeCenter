import Search from '../../../components/ui/input-search'
import { Button } from '../../../components/ui/button'
import { Heart, Plus } from 'lucide-react'

const TopBar = () => {
  return (
    <div className='px-4 mx-3 sm:mx-5 md:mx-8 mt-4'>
    <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
            <Search className="rounded-md border" placeholder='Search Here...' />
        </div>
        <div className="flex mb-4 space-x-3">
            <Button size="sm" className="bg-blue-500 text-white sm:size-sm md:size-md lg:size-lg xl:size-xl  rounded-md">
                <Plus />
                Add Forum
            </Button>
            <Button size="sm" className="bg-green-600 text-white sm:size-sm md:size-md lg:size-lg xl:size-xl rounded-md">
                <Heart />
                Support Us
            </Button>
        </div>
    </div>
</div>
  )
}

export default TopBar