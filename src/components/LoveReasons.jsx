import React from 'react'
import { motion } from 'framer-motion'
import { birthday } from '../data/birthday'
import SectionHeading,{fadeUp} from './SectionHeading'
const icons={smile:'♡',sparkles:'✦',music:'♪'}
export default function LoveReasons(){return <section className="section-shell section-pad reasons"><SectionHeading eyebrow="CHAPTER 03" title="Things I Love.">Three tiny things that somehow mean so much to me.</SectionHeading><div className="reason-grid">{birthday.loveReasons.map((r,i)=><motion.article key={r.title} className="glass reason-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} whileHover={{y:-6}}><span className="reason-icon">{icons[r.icon]}</span><p className="card-number">0{i+1}</p><h3>{r.title}</h3><p>{r.text}</p></motion.article>)}</div></section>}
