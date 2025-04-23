import TopBar from "./top-bar"
import PostFeed from "./post-feed"
import TopCommunities from "./top-communities"
import CommunityGuidelines from "./community-guidelines"


const ForumLayout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-col sm:flex-row gap-6 px-4 md:px-8 mt-6">
        <div className="flex-1">
          <PostFeed />
        </div>
        <div className="md:w-[40%]">
          <TopCommunities />
          <CommunityGuidelines />
         </div>
      </div>
    </div>
  )
}

export default ForumLayout
