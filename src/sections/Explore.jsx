import { motion } from "framer-motion"
import { exploreWorlds } from "../constants"
import { fadeIn, staggerContainer, textVariant2 } from "../utils"
import Typetext from "../components/Typetext"
import ExploreWorld from "../components/ExploreWorld"
import { useState } from "react"

const Explore = () => {
    const [ active, setActive ] = useState('world-2');
  return (
    <section>
        <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: 'false', amount: 0.25}}
        className="mx-auto mt-[200px]"
        >
            <Typetext title='| The Worlds' textStyles='text-center' />
            <motion.p variants={textVariant2} className="text-white font-bold text-center text-[30px]">
            Choose the world you want <br /> to explore
            </motion.p>
            <div className="flex flex-col lg:flex-row my-[20px] mx-10">
                {exploreWorlds.map((world, index) => (
                    <ExploreWorld {...world} key={world.id} index={index} active={active} handleClick={setActive} />
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default Explore