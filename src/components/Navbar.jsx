import React from 'react'
import { motion } from 'framer-motion'
import { Music2 } from 'lucide-react'
export default function Navbar({ musicOpen,onMusic }) { const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); return <motion.nav className="nav" initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:.5}}><button className="brand" onClick={()=>go('top')}>Vibu <span>♥</span> Thrisha</button><div className="nav-links"><button onClick={()=>go('story')}>Our Story</button><button onClick={()=>go('memories')}>Memories</button><button onClick={()=>go('letter')}>Love Notes</button></div><button className={`music-mini ${musicOpen?'active':''}`} onClick={onMusic} aria-label="Open our song"><Music2 size={16}/></button></motion.nav> }
