import { Checkbox } from "@/components/ui/checkbox";

type FilterOption = {
    title: string;
    options: string[]
}

const filterSections: FilterOption[] = [
    {
        title: "Categories",
        options: ["Fiction", "Non-Fiction", "Science", "Technology", "Arts"],
    },
    {
        title: "Format",
        options: ["Physical", "Digital", "Audio"],
    },
]

const FiltersSidebar = () => {
    return (
        <aside className="bg-white rounded-lg shadow p-4">
  <h3 className="text-xl mb-4">Filters</h3>
  {filterSections.map((section) => (
    <div key={section.title} className="mb-4">
      <h4 className="mb-2">{section.title}</h4>
      <div className="gap-4 sm:space-x-4 md:gap-0 md:space-y-2 flex flex-wrap md:flex-col">
        {section.options.map((option) => {
          const id = `${section.title}-${option}`;
          return (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox id={id} className="border-gray-400" />
              <span className="text-gray-700">
                {option}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  ))}
</aside>

    )
}

export default FiltersSidebar