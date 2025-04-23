'use client';

import { Progress } from "@/components/ui/progress";

export default function YourProgress() {
  return (
    <div className="max-w-sm rounded-xl border p-6 shadow-sm bg-white space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Your Progress</h2>

      <div>
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Course Completion</span>
          <span>65%</span>
        </div>
        <Progress value={65} className="h-2 bg-gray-200" />
      </div>

      <div className="text-sm text-gray-600 space-y-1 pt-2">
        <div className="flex justify-between">
          <span>Modules Completed</span>
          <span className="text-gray-400">13/20</span>
        </div>
        <div className="flex justify-between">
          <span>Assignments Submitted</span>
          <span className="text-gray-400">8/12</span>
        </div>
        <div className="flex justify-between">
          <span>Quiz Average</span>
          <span className="text-gray-400">87%</span>
        </div>
      </div>
    </div>
  );
}
