import React from 'react'
import Stats from './components/stats'
import CourseState from './components/course-state'
import WeeklyStats from './components/weekly-stats'
import TotalCourses from './total-courses'

const page = () => {
  return (
    <div className='flex space-x-8'>
      <div className='flex-[2] flex flex-col space-y-[3rem]'>
        <Stats />
        <div className='flex space-x-7'>
          <div className='flex-[1]'>
            <CourseState />
          </div>
          <div className='flex-[2]'>
            <WeeklyStats />
          </div>
        </div>
      </div>
      <div className='flex-[1]'>
        <TotalCourses />
     </div>
    </div>
  )
}

export default page