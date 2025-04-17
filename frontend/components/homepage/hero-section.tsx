import Image from "next/image"

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center mx-4 pt-9 '>
        <Image src="/Broadcast.png" alt="Broadcast banner" width={1232} height={340} className="object-cover" />
    </div>
  )
}

export default HeroSection