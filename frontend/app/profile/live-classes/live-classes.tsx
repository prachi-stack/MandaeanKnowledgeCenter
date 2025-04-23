import React from 'react'
import UserProfile from '../common/user-profile'
import LiveStream from '../../course-details/-components/live-stream/live-stream'
import { Button } from '@/components/ui/button'
import ProfileStats from '../common/profile-status'
import RecommendedCourses from '../common/recommended-next'

const LiveClasses = () => {
  const streams = [1, 2, 3, 4, 5, 6]; // An array to map over

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {streams.map((_, index) => (
        <div key={index}>
          <LiveStream />
          <Button size="sm" className='sm:px-4 mx-6 bg-blue-500'>Join</Button>
        </div>
      ))}
    </div>

  )
}

export default LiveClasses
