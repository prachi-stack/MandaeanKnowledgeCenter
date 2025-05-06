import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
   
  export default function PageChange() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem >
            <PaginationPrevious href="#" className="border-none" />
          </PaginationItem>
          <PaginationItem >
            <PaginationLink href="#" className="border-none" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="border-none">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="border-none">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="border-none">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="border-none" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  