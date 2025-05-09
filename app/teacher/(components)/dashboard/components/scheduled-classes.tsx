"use client"

import { useState } from "react"
import { CalendarIcon, ChevronDown } from "lucide-react"
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
} from "date-fns"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ScheduleClasses() {
  const [currentDate] = useState(new Date(2021, 9, 1)) // October 1, 2021

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)

  const allDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

   const startWeekday = getDay(monthStart) // 0 (Sun) - 6 (Sat)
  const leadingEmptyCells = Array.from({ length: startWeekday })

  return (
    <div className="w-full rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg text-neutral-800 font-semibold">Scheduled Classes</h1>
        <Select defaultValue="today">
      <SelectTrigger className="border-none text-gray-600">
        <SelectValue placeholder="select day" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="today">Today</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
       </div>
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="h-5 w-5 text-green-500" />
        <h2 className="text-lg font-medium text-neutral-800">
          October 13-18, 2021
        </h2>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-7 text-center text-sm font-medium pb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates grid */}
      <div className="grid grid-cols-7 border-t border-l border-gray-200">
        {leadingEmptyCells.map((_, i) => (
          <div
            key={`empty-${i}`}
            className="border-r border-b border-gray-200 p-2"
          />
        ))}

        {allDays.map((day, index) => {
          // Get day of month as a number directly, not as a string
          const dayNumber = Number(day.getDate()) // This returns a number directly
          return (
            <div
              key={index}
              className="border-r border-b border-gray-200 min-h-[100px] p-2 text-sm font-medium"
            >
              {dayNumber >= 13 && dayNumber <= 18 ? dayNumber : ""}
            </div>
          )
        })}
      </div>
    </div>
  )
}