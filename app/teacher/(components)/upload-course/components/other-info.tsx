"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OtherInformation() {
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")

  return (
    <div className="text-[#3F3F44]">
      <h2 className="text-lg font-semibold mb-4">Other Information</h2>

      <div className="flex gap-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="price">
            Price
          </label>
          <div className="flex bg-[#F6F6F6] rounded-lg">
            <div className="flex items-center justify-center px-3 text-[#3F3F444D]">$</div>
            <Input
              id="price"
              placeholder="00000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-none rounded-none border-l-5 border-l-[#3F3F444D] placeholder:text-[#3F3F444D]"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="category" className="">
            Category
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className=" bg-[#F6F6F6] text-[#3F3F444D] border-none">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="photography">Photography</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="tags" className="">
            Tags
          </label>
          <Select value={tags} onValueChange={setTags}>
            <SelectTrigger className="border-none text-[#3F3F444D] bg-[#F6F6F6]">
              <SelectValue placeholder="Please Select"/>
            </SelectTrigger>
            <SelectContent className="text-[#3F3F444D]">
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="all-levels">All Levels</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end items-end">
        <Button className="bg-blue-600 text-white">Submit for Review</Button>
      </div>
      </div>

      
    </div>
  )
}
