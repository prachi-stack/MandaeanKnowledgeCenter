import { Input } from '@/components/ui/input'
import React from 'react'
import { Progress } from '@/components/ui/progress'
import { Minus, Plus, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'

const  CourseContentResources = () => {
  return (
    <div className=''>
      <h1>Course Content & Resources</h1>
      <div className=''>
        <div className='flex items-center text-sm space-x-5 '>
          <h1>Lesson 1</h1>
          <div className='flex items-center'>
          <h1>Title</h1>
          <Input placeholder='Section 1' />
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <p>Uploading...</p>
              <p>85%</p>
            </div>
            <div className="bg-gray-200 rounded">
                <Progress className="w-[85%] bg-emerald-600" />
              </div>
          </div>
        </div>
        <div className='flex text-sm space-x-5 '>
          <h1 className='mt-2'>Lesson 2</h1>
            <div className='space-y-3'>
            <div className='flex items-center space-x-2'>
              <p className='text-[#3F3F44]'>Title</p>
              <Input placeholder='Type Here' className='bg-[#F6F6F6]' />
              <Plus />
            </div>
            <div className='flex items-center space-x-2'>
              <p className='text-[#3F3F44]'>Title</p>
              <Input placeholder='Type Here' className='bg-[#F6F6F6]' />
              <Plus />
            </div>
            <div className='flex items-center space-x-2'>
              <p className='text-[#3F3F44]'>Title</p>
              <Input placeholder='Type Here' className='bg-[#F6F6F6]' />
              <Minus />
            </div>
            </div>
            <div className='flex flex-col space-y-3'>
              <Button><Video />Upload Resource</Button>
              <Button><Video />Upload Resource</Button>
              <Button><Video />Upload Resource</Button>
            </div>
          </div>
        </div>
        <Button className='bg-blue-600 text-white'>Add Lesson</Button>
      </div>
    
  )
}

export default  CourseContentResources