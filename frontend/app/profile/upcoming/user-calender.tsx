'use client'

import React, {useState} from 'react'
import { Calendar } from "@/components/ui/calendar"


const UserCalender = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <div className='flex justify-center'>
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      </div>
      
    )
    
}
export default UserCalender