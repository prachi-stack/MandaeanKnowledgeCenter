import Image from "next/image"

const Navbar = () => {
  return (
    <div>
        <div className="flex items-center justify-center py-4 ">
            <Image src="/xcrino.png" alt="Logo" width={32} height={32} />
        </div>
        <hr className="border-t border-gray-300" />
    </div>
  )
}

export default Navbar