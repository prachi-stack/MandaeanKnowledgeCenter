import React from 'react'
import StatsCards from './components/stats-cards'
import TotalCourses from '../dashboard/components/total-courses'
import TopPerformCourse from '../dashboard/components/top-performing-courses'
import TopStudentLocation from '../dashboard/components/top-student-loc'
import CourseTable from './components/course-status'
import PageChange from './components/pagination'
import RecordsSelector from './components/view'

const page = () => {
  return (
    <div className='flex space-x-8'>
      <div className='flex-[2]'>
        <StatsCards />
        <CourseTable />
        <div className="flex justify-between items-center w-full mt-4">
          <RecordsSelector />
          <div className="ml-auto">
            <PageChange />
          </div>
        </div>
      </div>
      <div className='flex-[1] flex flex-col space-y-4'>
        <TotalCourses />
        <TopPerformCourse />
        <TopStudentLocation />
      </div>
    </div>
  )
}

export default page