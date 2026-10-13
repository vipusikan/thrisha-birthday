import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Particles from './Particles'
export default function IntroScreen({ onOpen }) { return <motion.div className="intro" initial={{opacity:1}} exit={{opacity:0,scale:1.04,transition:{duration:.9}}}><div className="intro-glow"/><Particles/><motion.div className="intro-content" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:1}}><p className="eyebrow">A LITTLE SOMETHING FROM VIBU</p><h1>For My<br/><em>My Darloo</em></h1><p className="intro-copy">Four years of memories, laughter, little moments and one very special person.</p><button className="primary-btn" onClick={onOpen}>Open Your Surprise <ArrowRight size={17}/></button></motion.div><div className="intro-foot">October 14 · a little world made just for you</div></motion.div> }
