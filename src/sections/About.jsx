import { motion } from "framer-motion"
import Typetext from "../components/Typetext"
import { fadeIn, staggerContainer } from "../utils"
import arrowDown from '/public/arrow-down.svg'

const About = () => {
  return (
    <section>
        <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: 'false', amount: 0.25}}
        className="flex flex-col items-center mt-[200px]"
        >
            <Typetext title={' | About Metaverse'} textStyles='textCenter' />
            <motion.p
            variants={fadeIn('up','tween', 0.2, 1)}
            className="text-[15px] sm:text-[25px] text-center text-[#c7c7e2] mt-10 sm:px-16 px-2"
            >
                <span className="text-white ">Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down
            </motion.p>
            
                <motion.img variants={fadeIn('up', 'tween', 0.3, 1)} className="w-[18px] h-[20px] object-contain mt-[20px] animate-bounce" src={arrowDown} alt="" />
            
        </motion.div>
    </section>
  )
}

export default About