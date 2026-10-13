import React from 'react'
import { motion } from 'framer-motion'
import { birthday } from '../data/birthday'
import { fadeUp } from './SectionHeading'
export default function LoveLetter(){return <section id="letter" className="section-shell section-pad letter-section"><motion.div className="glass letter" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}}><p className="eyebrow">A LETTER FROM VIBU</p><h2>To My Dearest Darloo,</h2><p className="letter-copy">{birthday.loveLetter}</p><p className="signature">— Yours, Vibu ♡</p></motion.div></section>}
