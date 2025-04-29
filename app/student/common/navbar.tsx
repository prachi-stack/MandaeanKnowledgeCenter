import Image from "next/image"

const Navbar = () => {
  return (
    <>
        <div className="flex items-center justify-center h-10 sm:h-15 mt-4">
            <Image src="/xcrino.png" alt="Logo" width={120} height={40} />
        </div>
        <hr className="border-t border-gray-300" />
    </>
  )
}

export default Navbar