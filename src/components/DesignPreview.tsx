"use client"

import { Spectral } from 'next/font/google';
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

const DesignPreview = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  useEffect(() => {setShowConfetti(true)}, [])
  const confettiConfig = {
    angle: 90,
    spread: 360,
    elementCount: 500,
    duration: 4000,
  }
  
  return (
    <>
      <div className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'>
        <Confetti active={showConfetti} config={confettiConfig}  />
      </div>
    </>
  )
}

export default DesignPreview