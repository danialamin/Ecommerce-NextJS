'use client'

import Image from "next/image"
import { usePathname } from "next/navigation"

const STEPS = [
  {
    name: 'Step 1: Add image',
    description: 'Choose an image for your case',
    url: '/upload',
  },
  {
    name: 'Step 2: Customize design',
    description: 'Make the case yours',
    url: '/design',
  },
  {
    name: 'Step 3: Summary',
    description: 'Review your final design',
    url: '/preview',
  },
]

const Steps = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col bg-white lg:flex-row lg:justify-around">
      {STEPS.map((STEP, i) => {
        const isCurrent = pathname.endsWith(STEP.url)
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathname.endsWith(step.url)
        )

        return (
          <div key={STEP.name} className={`flex items-center py-2 gap-3 border-b-[2px] border-l-[3px] ${isCurrent ? 'border-l-green-600' : 'border-l-green-200'}`}>
            <div><Image src={`/snake-${i+1}.png`} alt="snake" width={i==0 ? 50 : 60} height={60} className="ml-3"></Image></div>
            <div className="flex flex-col justify-center">
              <p className="text-[0.95rem] font-semibold">{STEP.name}</p>
              <p className="text-[0.95rem]">{STEP.description}</p>
            </div>
          </div>
      )})}
    </div>
  )
}

export default Steps