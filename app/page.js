'use client';

import { MagneticButton } from '@/components/magnetic-button';

export default function Home() {
  return (
    <main className="h-screen flex gap-x-20 items-center justify-center">
      <div className="flex">
          <MagneticButton>
            <button className='py-3 px-5 rounded-full border border-black hover:bg-black hover:text-white'>
              Hover Me
            </button>
          </MagneticButton>
      </div>
      <div className="flex">
          <MagneticButton>
            <button className='py-3 px-5 rounded-full border border-black hover:bg-black hover:text-white'>
              Hey 😊
            </button>
          </MagneticButton>
      </div>
      <div className="flex">
          <MagneticButton>
            <button className='py-3 px-5 rounded-full border border-black hover:bg-black hover:text-white'>
              Click Me
            </button>
          </MagneticButton>
      </div>
    </main>
  )
}