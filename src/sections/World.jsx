import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils"
import Typetext from "../components/Typetext";

const World = () => {
  return (
    <section className="lg:px-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full flex justify-center mx-auto items-center  px-10 flex-col gap-8"
      >
        <div>
        <Typetext title={'| How Metaverse works'} />
        <h1 className='lg:text-[45px] text-[24px] font-extrabold text-white text-center '>Track friends around you and invite them to play together in the same world</h1>
        </div>
        <motion.div
        variants={fadeIn('up', 'tween', 0.25, 1)}
        >
            <img src="/map.png" className="w-full h-full object-cover" alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default World