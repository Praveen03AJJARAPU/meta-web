import { motion } from 'framer-motion'
import { fadeIn, planetVariants, staggerContainer } from '../utils'
import Typetext from '../components/Typetext'
import { startingFeatures } from '../constants'
import Steps from '../components/Steps'
const GetStarted = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: 'false', amount:0.25}}
    className='2xl:max-w-[1280px] w-full flex justify-center mx-auto items-center lg:flex-row px-10 flex-col gap-8'
    >
      <motion.div
      variants={planetVariants('left')}
      >
        <img src="/get-started.png" className='w-[80%] h-[80%] mx-auto lg:mx-0 object-contain' alt="" />
      </motion.div>
      <motion.div
      variants={fadeIn('left','tween',0.25,1)}
      
      >
        <Typetext title={'| How Metaverse works'} />
        <h1 className='text-[24px] font-extrabold text-white text-center '>Just a few clicks away</h1>
        <div className='flex flex-col justify-center lg:w-full md:w-[65%] mx-auto'>
          {startingFeatures.map((feature,index) => (
            <Steps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>

    </motion.div>
)}
export default GetStarted