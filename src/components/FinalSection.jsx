import React from 'react'
import { motion } from 'framer-motion'
import { Music2 } from 'lucide-react'
import Particles from './Particles'
import { birthday } from '../data/birthday'
import { fadeUp } from './SectionHeading'
export default function FinalSection({onMusic}){return <section className="final section-shell"><Particles/><div className="final-glow"/><motion.div className="final-content" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}}><p className="eyebrow">CHAPTER 04 · ALWAYS</p><h2>Happy Birthday,<br/><em>My Love.</em></h2><p>Today is your special day, but somehow I'm the lucky one — because I get to love you.</p><p>Here's to our next memory, and the next one, and all the ones after that.</p><button className="primary-btn" onClick={onMusic}><Music2 size={17}/> Play Our Song on Spotify</button><div className="forever">Forever & Always ♡</div></motion.div></section>}
