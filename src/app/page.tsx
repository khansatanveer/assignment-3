 import profile from "../app/public/profile.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className= "bg-yellow-50  min-h-screen  flex justify-between place-items-start">
   
    <div className="text-red-300 w-fit h-[150px] m-[40px] text-[60px] font-black ">
    
     Hey,
      <br/>
     MY NAME IS 
     <br/>
     <span className="text-blue-300">KHANSA TANVEER</span>
      <br />I am Next JS Developer </div>
    <Image  className="flex justify-center items-start pt-12 absolute top-20 right-20  " 
      src=   {profile}
      width={400}
      height={200}
      alt="profile.png"/>
      </div>
    
)
}
