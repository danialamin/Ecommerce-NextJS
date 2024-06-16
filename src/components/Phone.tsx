import Image from "next/image";
import { ReactNode } from "react";

type phoneProps = {
  imgSrc: string;
  propClassName?: string;
  dark?: boolean
}

const Phone = ({imgSrc, propClassName, dark = false, ...props }: phoneProps): ReactNode => {
  return (
    <div className={`relative z-10 ${propClassName}`} {...props} >
      <Image src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'} alt='phone image' width={150} height={120} className='select-none z-10'></Image>
      <div className="absolute -z-10 top-0 ">
        <Image src={imgSrc} alt="overlaying phone image" width={150} height={100} className="min-h-full min-w-full"></Image>
      </div>
    </div>
  )
}

export default Phone