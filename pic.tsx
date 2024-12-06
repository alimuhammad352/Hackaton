import Image from "next/image"
import cop from "@/app/Assests/cop.jpg"
import Vector1 from "@/app/Assests/Vector1.png"
import Vector2 from "@/app/Assests/Vector2.png"
export default function Pic(){
    return(
        <div className="w-[1440px] h-[663px] mt-[134px] py-28 bg-[#f2f0f1]">

            <div className="w-[577px] h-[173px]  mx-24 size-64 text-6xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE </div>
            <div className="w-[545px] h-[33px] mt-10 mx-[100px] font-satoshi w-400 size-16 vertical trim cap-height line height-[22px] bg-[#00000099]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. </div>
             <div className="w-[210px] h-[52px] mt-12 bottom-[16px] mx-[100px] radius-[62px] rounded-full bg-black"> 
             <button className="w-[75px] h-[22px] text-white py-3.5 mx-16  w-500 size-16  ">Shop Now </button>
             
             </div>
             <div className="size-[430px] mx-[900px] mt-[-460px]"> <Image src={cop} alt='' /> </div>
             <div className="w-[104px] h-[104px] mt-[-380px] mx-[1255px]  "><Image src={Vector1} alt='' /> </div>
             <div className="w-[56px] h-[56px] mt-[180px] mx-[750px]"> <Image src={Vector2} alt='' /> </div>
             </div>
    )
}