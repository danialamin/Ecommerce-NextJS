import Image from "next/image";
import { MdCheckBox } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Phone from "@/components/Phone";

export default function Home() {
  return (
    <div className="bg-slate-50 flex justify-center pt-12">
      <section className="w-[min(100%,1024px)] flex flex-col myMediaQuery870:justify-between myMediaQuery870:flex-row gap-5">
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
    </div>
  );
}
