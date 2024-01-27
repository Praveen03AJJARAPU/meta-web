import React from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '../utils'
import menu from '/public/menu.svg'
import search from '/public/search.svg'
import '../index.css'

export const Nav = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="text-white sm:px-16 px-6 py-8 relative"
    >
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className='flex justify-between'>
        <img src={search} alt="" />
        <h2 className="font-bold text-[24px]">METAVERSE</h2>
        <img src={menu} alt="hamburger" />
      </div>
    </motion.div>
  );
}