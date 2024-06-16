"use client"

import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
import {configurationType} from '../../prisma/typesDump'
import Phone from './Phone';
import { MODELS } from '@/validators/option-validator';

const DesignPreview = ({configuration}: {configuration: configurationType}) => {
  // Confetti Stuff
  const [showConfetti, setShowConfetti] = useState(false)
  useEffect(() => {setShowConfetti(true)}, [])
  const confettiConfig = {
    angle: 90,
    spread: 360,
    elementCount: 500,
    duration: 4000,
  }

  const {color} = configuration
  const displayModelName = MODELS.options.map((obj: any) => {
      if (obj['value'] === configuration.model) {
        return obj['label']
      }
  })

  return (
    <>
      <div className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'>
        <Confetti active={showConfetti} config={confettiConfig}  />
      </div>

      <div>
        <Phone propClassName={`bg-${configuration.color}`} imgSrc={configuration.croppedImageUrl as string} />
        <p className='text-[4rem]'>{displayModelName}</p>
      </div>
    </>
  )
}

export default DesignPreview