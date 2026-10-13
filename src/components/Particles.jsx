import React, { useMemo } from 'react'
export default function Particles({ burst = false }) {
  const dots = useMemo(() => Array.from({ length: burst ? 18 : 28 }, (_, i) => ({ id:i,left:`${(i*37)%100}%`,top:`${(i*61)%100}%`,delay:(i%9)*.35,size:2+(i%3) })), [burst])
  return <div className={burst ? 'particles burst' : 'particles'} aria-hidden="true">{dots.map(d=><span key={d.id} style={{left:d.left,top:d.top,width:d.size,height:d.size,animationDelay:`${d.delay}s`}} />)}</div>
}
