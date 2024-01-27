import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils"

const Typetext = ({ title, textStyles }) => {
  return (
    <motion.p variants={textContainer} className='text-center text-[14px] text-[#c7c7c7]  '>
        {Array.from(title).map((letter, index) => (
            <motion.span key={index} variants={textVariant2}>
                { letter === ' ' ? '\u00A0' : letter }
            </motion.span>
        ))}
    </motion.p>
  )
}

export default Typetext