import React,{useState} from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { Gift,Sparkles } from 'lucide-react'
import { birthday } from '../data/birthday'
import { fadeUp } from './SectionHeading'
export default function SurpriseSection(){const[open,setOpen]=useState(false);return <section className="section-shell section-pad surprise"><motion.div className="surprise-inner" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}}><p className="eyebrow">A LITTLE SOMETHING EXTRA</p><h2>I kept a little surprise.</h2><p className="section-desc">Tap the gift. Don't overthink it. 🎁</p><motion.button className={`gift ${open?'opened':''}`} onClick={()=>setOpen(true)} whileTap={{scale:.95}} aria-label="Open surprise gift"><Gift size={72} strokeWidth={1.2}/></motion.button><AnimatePresence>{open&&<motion.div className="wish" initial={{opacity:0,y:25,height:0}} animate={{opacity:1,y:0,height:'auto'}} transition={{duration:.8}}><span className="eyebrow">MY WISH FOR YOU</span><h3>More little moments. More us.</h3><p>{birthday.wish}</p><Sparkles className="wish-spark" size={20}/></motion.div>}</AnimatePresence></motion.div></section>}
