import { Button } from '@/components/ui/button'
import {Podcast, Video, UserRound, Clock3} from 'lucide-react'

const LiveStream = () => {
  return (
    <div className='p-6'>
        <div className='bg-gray-200 h-50 rounded-xl'>
            <div className='flex'>
                <Button className='bg-red-700 ml-auto mt-4 mr-3 '>
                    <Video strokeWidth={3} />
                    LIVE
                </Button>
            </div>
            <div className='flex flex-col items-center'>
                <Podcast size={35} className='text-purple-500' />
                <span className='text-gray-500'>Connecting to live steam</span>
            </div>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
            <h2>Adianced Data Analysis Wor chgp </h2>
            <p>Join Prufessor Sarah Chen for a live workshop on advanced data analysis lechnigues</p>
            <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                    <UserRound />
                    <span>128 Viewers</span>
                </div>
                <div className='flex space-x-2'>
                    <Clock3 />
                    <span>Started 15 minutes ago</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveStream