import { motion } from 'framer-motion'
import { fadeIn, planetVariants, staggerContainer } from '../utils'
import Typetext from '../components/Typetext'
import { newFeatures } from '../constants'
import NewFeatures from '../components/NewFeatures'

const WhatsNew = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className="2xl:max-w-[1280px] my-[150px] w-full flex justify-center mx-auto items-center lg:flex-row px-10 flex-col gap-8"
    >
      <motion.div variants={fadeIn("left", "tween", 0.25, 1)}>
        <Typetext title={"| What's new?"} />
        <h1 className="text-[24px] font-extrabold text-white text-center ">
          What's new about METAVERSE?
        </h1>
        <div className="flex flex-col lg:flex-row mt-2 gap-8 justify-center  mx-auto">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants("left")}>
        <img
          src="/whats-new.png"
          className="w-[80%] h-[80%] mx-auto lg:mx-0 object-contain"
          alt=""
        />
      </motion.div>

    </motion.div>
  );
}

export default WhatsNew