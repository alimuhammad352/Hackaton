import Image from "next/image";
import logo from "@/app/Assests/logo.png"
import ist from "@/app/Assests/ist.jpg"
import peo from "@/app/Assests/peo.png"
import image7 from "@/app/Assests/image 7.png"
import Frame10 from "@/app/Assests/Frame 10.png"
import Jean from "@/app/Assests/jean.png"
import Shirt from "@/app/Assests/shirt.png"
import Image8 from "@/app/Assests/image 8.png"
import Image9 from "@/app/Assests/image 9.png"
import Image10 from "@/app/Assests/image 10.png"
import Frame11 from "@/app/Assests/Frame 11.png"
import Frame12 from "@/app/Assests/Frame 12.png"
import Frame13 from "@/app/Assests/Frame 13.png"
export default function WorkManage(){
    return(
        <div className="w-[1440px] h-[38px] bg-black">

      <h1 className="w-[451px] h-[19px] py-[9px] mx-[544px] text-white">Sign up and get 20% off to your first order. Sign Up Now </h1>
   <div className="w-[1240px] h-[48px] mt-[62px] mx-[100px]  gap-40 flex"> 
    <div className="w-[160px] h-[22px] font-extrabold text-3xl  w-700 size-[32px]   text-black">SHOP.CO </div>
    <div className="w-[321px] h-[22px] gap-24 flex ">
      <li> Shop</li>
      <li>On Sale</li>
      <li>New Arrivals</li>
      <li>Brands</li>
       </div>
       <div className="w-[577px] h-[48px] radius-[62px]   mx-[16px]  rounded-[12px] px-8 py-3 gap-[12px] bg-[#f0f0f0] flex ">
        <div className="w-[20.27] h-[20.27] mx-[1.86px] my-[1.86px] flex justify-center "> <Image src={logo} alt='' /> </div>
        <div className="w-[151px] h-[22px] flex justify-center text-sm  text-[#00000066]"> Search for products...</div>
         </div>
         </div>
         <div className="w-[62px] h-[24px] mx-[1350px]  mt-[-40px] ">
         <div className="w-[24px] h-[24px] "><Image src={ist} alt='' /> </div>
         <div className="w-[20.25px] h-[20.25px] mx-8 mt-[-20px] "><Image src={peo} alt='' /> </div>
         
           </div>
           <div className="w-[596px] h-[74px] mt-[517px] mx-[100px] gap-32 flex ">
            <div className="w-[141px] h-[74px]"> <h1 className="w-[107px] h-[54px] font-semibold  text-4xl "> 200+</h1> 
            <p className="w-[141px] h-[22px] bg-[#00000099]">International Brands </p> 
            </div>
            <div className="w-[156px] h-[74px]"> 
            <div className="w-[146px] h-[54px] font-semibold  text-4xl ">2,000+ </div>
            <p className="w-[156px] h-[22px] bg-[#00000099]">High-Quality Products </p>
            </div>
            <div className="w-[171px] h-[74px]"> <h1 className="w-[171px] h-[54px] font-semibold text-4xl">30,000+ </h1> 
            <p className="w-[126px] h-[22px] bg-[#00000099]">Happy Customers </p>
            </div>
              </div>
              <div className="w-[1440px] h-[122px] mt-[97px] bg-black flex justify-between text-[#FFFFFF]  "> 
              <div className="w-[166.48px] h-[33.16px] py-10  mx-[100px] text-5xl "> VERSACE </div>
              <div className="w-[91px] h-[37.98px] py-10  text-5xl "> ZARA</div>
              <div className="w-[156px] h-[32.29px] py-10 text-5xl ">GUCCI </div>
              <div className="w-[194px] h-[31.2px] font-extrabold text-5xl py-10 "> PARADA  </div>
              <div className="w-[206.79px] h-[33.85px]  text-4xl py-10 ">Calvin Klein </div>
              </div>
              <div className="w-[403px] h-[58px]  mx-[518px] mt-20 text-4xl font-extrabold text-black "> NEW ARRIVALS </div>
              <div className="flex mt-10 justify-between mx-[50px]">   
              <div className="w-[295px] h-[298px]  rounded-[20px]  radius-[20px]    bg-[#F0EEED]">
                <div className="w-[296px] h-[444px]  mx-[-1px]  "><Image src={image7} alt='' /> </div>
                <div className="w-[225px] h-[27px] mt-[-120px] font-bold text-sm"> T-SHIRT WITH TAPE DETAILS</div>
                <div className="w-[150px] h-[19px]">
                <div className="w-[104px] h-[18.49px] gap-[5.31px] "> <Image src={Frame10} alt='' /> </div>
                 <div className="w-[33px] h-[19px] mx-[120px] mt-[-20px] gap-[13px]"> 4.5/5</div>  
                   </div>
                
                <div className="w-[55px] h-[32px] size-[24px] mt-3 font-extrabold text-lg text-[#000000]">$120  </div>
                 </div>
              <div className="w-[295px] h-[298px]  rounded-[20px]  radius-[20px]  bg-[#F0EEED]">
                <div className="w-[268px] h-[402px] "><Image src={Image8} alt='' /> </div>
                <div className="w-[150px] h-[27px] mt-[-80px] font-bold text-sm ">SKINNY FIT JEANS </div>
                <div className="W-[126.2px] h-[19px] "> 
                <div className="w-[80.2px] h-[18.49px] gap-[5.31px]" > <Image src={Frame11} alt='' /> </div>
                <div className="w-[33px] h-[19px] mx-[120px] mt-[-20px] gap-[13px]">3.5/5 </div>
                <div className="w-[200px] h-[32px] gap-[10px] mt-3 flex">
                  <div className="w-[61px] h-[32px] size-[24px] font-extrabold text-lg text-[#000000] ">$240 </div>
                  <div className="w-[61px] h-[32px] text-[#00000066]">$260 </div>
            <div className="w-[58px] h-[28px] mx-[14px] rounded-[62px]  bg-[#FF33331A]">   <div className="w-[31px] h-[16px] text-[#FF3333] text-sm mx-3 mt-[2px]"> -20%</div> </div>  
                   </div>
                   </div> 
                 </div>
              <div className="w-[295px] h-[298px]  rounded-[20px]  radius-[20px] bg-[#F0EEED]"> 
              <div className="w-[296px] h-[444px] "> <Image src={Image9} alt='' /></div>
              <div className="w-[151px] h-[27px] mt-[-120px] font-bold text-sm">CHECKERED SHIRT </div>
              <div className="w-[150px] h-[19px]">
                <div className="w-[104px] h-[18.49px] gap-[5.31px]"> <Image src={Frame12} alt='' />  </div>
                <div className="w-[33px] h-[19px] mx-[120px] mt-[-20px] gap-[13px]">4.5/5 </div>
                <div className="w-[56px] h-[32px] font-extrabold mt-3 size-[24px] text-lg">$180 </div>
                 </div>

              </div>
              <div className="w-[295px] h-[298px]  rounded-[20px]  radius-[20px] bg-[#F0EEED]">
                <div className="w-[296px] h-[444px]"><Image src={Image10} alt='' /> </div>
                <div className="w-[199px] h-[27px] mt-[-120px] font-bold text-sm">SLEEVE STRIPED T-SHIRT </div>
                <div className="w-[150px] h-[19px] flex justify-between">
                  <div className="w-[104px] h-[18.49px] gap-[5.31px]"><Image src={Frame13} alt='' /> </div>
                  <div className="w-[33px] h-[19px] mt-[-1px] "> 4.5/5 </div>
                   </div>
                   <div className="w-[189px] h-[32px]">
                    <div className="w-[55px] h-[32px] font-extrabold mt-3 size-[24px] text-lg">$130 </div>
                     </div>
                 </div>
              </div>    
              
    </div>
    )
}

