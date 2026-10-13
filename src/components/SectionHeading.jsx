import React from 'react'
import { motion } from 'framer-motion'
export const fadeUp={hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}}
export default function SectionHeading({eyebrow,title,children}){return <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children&&<p className="section-desc">{children}</p>}</motion.div>}
