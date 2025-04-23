 "use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfileTab from "./profile-edit/profile-edit"
import NotificationTab from "./notifications/notifications"

export default function SettingsPage() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="flex space-x-6 border-b border-gray-200">
          <TabsTrigger
            value="profile"
            className="relative pb-2 text-gray-600 data-[state=active]:text-blue-600 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-blue-600 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:origin-left"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="relative pb-2 text-gray-600 data-[state=active]:text-blue-600 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-blue-600 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:origin-left"
          >
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="pt-6">
          <ProfileTab />
        </TabsContent>
        <TabsContent value="notifications" className="pt-6">
          <NotificationTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
