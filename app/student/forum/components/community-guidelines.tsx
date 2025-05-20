import Link from "next/link"

const guidelines: string[] = [
  "Be respectful and kind",
  "No spam or self-promotion",
  "keep discussions on topic",
  "Follow forum rules",
]

const CommunityGuidelines = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="text-md font-semibold mb-4">Community Guidelines</h3>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
        {guidelines.map((rule, idx) => (
          <li key={idx}>{rule}</li>
        ))}
      </ul>
      <Link
        href="/community-guidelines"
        className="text-sm text-blue-600 underline mt-2 inline-block"
      >
        Learn More
      </Link>
    </div>
  )
}

export default CommunityGuidelines