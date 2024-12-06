import Image from "next/image"
import image from "@/app/Assests/image.png"
import frame4 from "@/app/Assests/Frame 4.png"
import frame5 from "@/app/Assests/Frame 5.png"
import image2 from "@/app/Assests/image 2.png"
import image3 from "@/app/Assests/image 3.png"
import frame6 from "@/app/Assests/Frame 6.png"             
import image4 from "@/app/Assests/image 4.png"
import frame8 from "@/app/Assests/Frame 8.png" 
import frame9 from "@/app/Assests/Frame 9.png" 

export default function Lock(){
    return(
        <div>
        <div className="w-[346px] h-[58px] mx-[600px] text-4xl mt-[828px] font-extrabold"> TOP SELLING  </div>
        <div className="flex mt-10 gap-24 mx-[50px] "> 
        <div className="w-[296px] h-[298px] rounded-[20px] radius-[20px] bg-[#F0EEED]">
            <div className="w-[296px] h-[444px]"><Image src={image} alt='' /> </div>
            <div className="w-[194px] h-[27px] mt-[-120px] text-sm font-bold">VERTICAL STRIPED SHIRT </div>
            <div className="w-[160.7px] h-[19px] gap-[13px] ">
                <div className="w-[113.7px] h-[18.49] "> <Image src={frame4} alt='' /></div>
                <div className="w-[34px] h-[19px] mx-32 mt-[-20px]">5.0/5 </div>
              <div className="flex mt-8">  
                <div className="w-[53px] h-[32px] font-bold text-black text-lg "> $212</div>
                <div className="w-[56px] h-[32px] text-[#00000066] text-lg"> $232 </div>
                <div className="w-[58px] h-[28px] gap-[12px] rounded-full bg-[#FF33331A]"><div className="w-[31px] h-[16px] px-2 py-[1px] text-[#FF3333]"> -20%</div> </div>
                </div>
                 </div>
             </div>
        <div className="w-[296px] h-[298px] rounded-[20px] radius-[20px] bg-[#F0EEED]"> 
           <div className="w-[294px] h-[441px]"><Image src={image2} alt='' /> </div>
           <div className="w-[226px] h-[27px] font-bold text-sm mt-[-120px]"> COURAGE GRAPHIC T-SHIRT"</div>
            <div className="w-[137.9px] h-[19px] ">
                <div className="w-[89.9px] h-[18.49px] "> <Image src={frame5} alt='' /></div>
                <div className="w-[35px] h-[19px] mx-32 mt-[-20px]"> 4.0/5</div>
                <div className="w-[54px] h-[32px] font-extrabold mt-1 text-lg">$145 </div>
                 </div>


        </div>
        <div className="w-[296px] h-[298px] rounded-[20px] radius-[20px] bg-[#F0EEED]"> 
         <div className="w-[296px] h-[444px]"><Image src={image3} alt='' /> </div>
         <div className="w-[239px] h-[27px] mt-[-120px] font-bold text-sm"> LOOSE FIT BERMUDA SHORTS</div>
         <div className="w-[113.09px] h-[19px]  ">
            <div className="w-[66.09px] h-[18.49px] "><Image src={frame6} alt='' /> </div>
            <div className="w-[34px] h-[19px] mx-32 mt-[-20px] ">3.0/5 </div>
             </div>
             <div className="w-[47px] h-[32px] font-extrabold text-lg mt-1 ">$80 </div>

        </div>
        <div className="w-[296px] h-[298px] rounded-[20px] radius-[20px] bg-[#F0EEED]">
            <div className="w-[252px] h-[378px]"> <Image src={image4} alt='' /></div>
            <div className="w-[185px] h-[27px] mt-[-55px] font-bold text-sm">FADED SKINNY JEANS </div>
            <div className="w-[150px] h-[19px]"> 
            <div className="w-[104px] h-[18.49]"><Image src={frame8} alt='' /> </div>
            <div className="w-[33px] h-[19px] mx-32 mt-[-20px] ">4.5/5 </div>
            
            </div>
            <div className="w-[55px] h-[32px] mt-1 text-lg font-extrabold ">$210 </div>
             </div>
        </div>
        </div>
    )
};