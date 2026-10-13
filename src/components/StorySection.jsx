import React from 'react'
import { motion } from 'framer-motion'
import { birthday } from '../data/birthday'
import { fadeUp } from './SectionHeading'
export default function StorySection(){return <section id="story" className="section-shell section-pad"><div className="split"><motion.div className="glass story-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}}><p className="eyebrow">{birthday.story.eyebrow}</p><h2>{birthday.story.title}</h2><h3>{birthday.story.lead}</h3><p>{birthday.story.body}</p><div className="rule"/><span className="signature">— Vibu</span></motion.div><motion.figure className="photo-frame" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}}><img src="/photos/photo1.jpg" alt="Romantic placeholder for your first-meet photo"/><figcaption>{birthday.story.caption}</figcaption></motion.figure></div></section>}
