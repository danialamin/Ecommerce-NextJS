import Image from "next/image";
import { MdCheckBox } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 w-[min(100%,1024px)] flex flex-col items-center mx-auto pt-12 px-2">
      <section className="flex flex-col w-[100%] myMediaQuery870:justify-between myMediaQuery870:flex-row gap-5">
        <div className="flex flex-col myMediaQuery870:w-[650px]">
          <Image src="/snake-1.png" alt="snake" width={70} height={70} />
          <h1 className="text-[2rem] font-bold">Your Image on a <span className="bg-green-600 text-white px-[2px]">Custom</span> <span className="text-nowrap">Phone Case</span></h1>
          <p className="mb-10 tracking-tight max-w-[600px]">Bored with generic phone cases? Design your own!  At Clickety Case, we make it easy to create a custom case that reflects your unique style.</p>
          <ul className="mx-auto sm:ml-2 mb-[40px]">
            <li className="flex items-center gap-2 tracking-wide"><MdCheckBox className="text-[green]" size={22}/> High-quality durable material</li>
            <li className="flex items-center gap-2 tracking-wide"><MdCheckBox className="text-[green]" size={22}/> 5 year print guarantee</li>
            <li className="flex items-center gap-2 tracking-wide"><MdCheckBox className="text-[green]" size={22}/> Modern iPhone models supported</li>            
          </ul>
          <div className="flex flex-col sm:flex-row sm:justify-start gap-x-4  ">
            <div className="flex justify-center -space-x-2 mb-[10px]">
              <Image src="/users/user-1.png" alt="user" width={45} height={45} className="rounded-full" />
              <Image src="/users/user-2.png" alt="user" width={45} height={45} className="rounded-full" />
              <Image src="/users/user-3.png" alt="user" width={45} height={45} className="rounded-full" />
              <Image src="/users/user-4.jpg" alt="user" width={45} height={45} className="rounded-full" />
              <Image src="/users/user-5.jpg" alt="user" width={45} height={45} className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="flex mx-auto sm:mx-0">
                <FaStar className="text-blue-700" size={20}/>
                <FaStar className="text-blue-700" size={20}/>
                <FaStar className="text-blue-700" size={20}/>
                <FaStar className="text-blue-700" size={20}/>
                <FaStar className="text-blue-700" size={20}/>
              </div>
              <p className="tracking-tight font-[0.65rem] mx-auto sm:mx-0">1580 happy customers</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center myMediaQuery870:items-end myMediaQuery870:justify-start">
          <Phone imgSrc="/testimonials/1.jpg" />
        </div>
      </section>

      <section className="flex flex-col items-center mt-[60px]">
        <div className="flex items-center gap-2">
          <h1 className="font-[800] text-[1.9rem]">What Customers say</h1>
          <Image src={'/snake-2.png'} alt="snake" width={70} height={30}></Image>
        </div>
        <div className="flex flex-col items-center my-2 py-2">
          <div className="flex mx-auto bg-[#b50027] pb-[6px] rounded-t p-1">
                  <FaStar className="text-[#f4b41a]" size={20}/>
                  <FaStar className="text-[#f4b41a]" size={20}/>
                  <FaStar className="text-[#f4b41a]" size={20}/>
                  <FaStar className="text-[#f4b41a]" size={20}/>
                  <FaStar className="text-[#f4b41a]" size={20}/>
          </div>
          <p className="text-center tracking-tighter text-[0.97rem] w-[min(100%,600px)] text-white font-[500] bg-[#b50027] px-4 leading-[25px] rounded-t-md">&quot;Obsessed with my new Spigen case! It&apos;s slim and stylish but feels super protective. I&apos;ve already dropped my phone once (oops!), and the case took the hit perfectly. No scratches on my phone in sight!&quot;</p>
          <div className="w-[min(100%,600px)] bg-slate-200 flex gap-4 items-center py-[6px]">
            <Image src="/users/user-1.png" alt="user" width={50} height={50} className="rounded-full ml-12" />
            <p className="font-[500]">Jonathan</p>
          </div>
        </div>
        <div className="flex flex-col items-center my-2 py-2">
          <div className="flex mx-auto bg-[#b50027] pb-[6px] rounded-t p-1">
                  <FaStar className="text-[#f4b41a]" size={20}/>
                  <FaStar className="text-[#f4b41a]" size={20}/>
                  <FaStar className="text-[#f4b41a]" size={20}/>
                  <FaStar className="text-[#f4b41a]" size={20}/>
                  <FaStar className="text-[#f4b41a]" size={20}/>
          </div>
          <p className="text-center tracking-tighter text-[0.97rem] w-[min(100%,600px)] text-white font-[500] bg-[#b50027] px-4 leading-[25px] rounded-t-md">&quot;This Vena wallet case is a lifesaver! Holds my credit cards and ID securely, so I can ditch my bulky wallet. Plus, the built-in kickstand is perfect for watching videos on the go. Absolutely love it!&quot;</p>
          <div className="w-[min(100%,600px)] bg-slate-200 flex gap-4 items-center py-[6px]">
            <Image src="/users/user-2.png" alt="user" width={50} height={50} className="rounded-full ml-12" />
            <p className="font-[500]">Alia</p>
          </div>
        </div>
      </section>

      <section>
        <Reviews />
      </section>

      <section className="mt-[20px] flex flex-col gap-3 w-[min(600px,100%)]">
        <h1 className="text-[1.9rem] font-[600] text-center">Upload your photo and get <span className="bg-green-600 text-white px-[6px] py-[2px]">your own case</span> now</h1>
        <div>
          <div className="relative flex flex-col items-center myMediaQuery870:flex-row">
            <Image src={'/horse.jpg'} alt="horse" width={200} height={120} className="myMediaQuery870:ml-[50px]"></Image>
            <Image src={'/arrow.png'} alt="arrow" width={100} height={100} className="absolute top-[340px] myMediaQuery870:top-[140px] myMediaQuery870:left-[255px] rotate-90 myMediaQuery870:rotate-0"></Image>
            <Phone propClassName="absolute top-[105px] myMediaQuery870:left-[110px] myMediaQuery870:top-0" imgSrc="/horse_phone.jpg"/>
            <Link href={'/configure/upload'} className="absolute top-[750px] myMediaQuery870:top-[340px] myMediaQuery870:left-[180px] flex gap-2 bg-green-600 text-white text-[1.1rem] font-[600] py-3 px-[10px] rounded-2xl">Create your case now <BsArrowRightCircleFill size={25} className="text-white" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
