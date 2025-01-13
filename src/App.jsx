import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function App() {
  useGSAP(()=>{
    gsap.to("#div1",{
      x:250,
      duration:3,
      ease:"back.inOut",
      rotate:360
    })
  })
  return (
    <>
      <div className='w-20 h-20 bg-blue-400 m-5 radius-lg' id="div1"> 

      </div>
    </>
  )
}

export default App
