import { motion } from 'framer-motion'
import { staggerContainer, textVariant } from '../utils';

const Hero = () => {
  return (
    <section>
      <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: 'false', amount: '0.25'}}
      >
        <div className='flex  flex-col items-center lg:text-[144px] md:text-[100px] sm:text-[60px] font-bold text-[50px] text-[#c7c7c7] z-40'>
            <motion.h1 variants={textVariant(1.1)}>
                METAVERSE
            </motion.h1>
            <motion.div variants={textVariant(1.5)} className='flex -mt-5 flex-row justify-center items-center'>
                <h1>MA</h1>
                <div className='md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] sm:mx-2 mx-[9px]  border-[#c7c7c7] md:border-[18px] border-[9px] rounded-r-full' />
                <h1>NESS</h1>
            </motion.div>
        </div>
        {/* <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative w-full md:-mt-[20px] -mt-[12px]'
        >
            <div className='w-full absolute h-[300px] -top-[30px] z-[0]'>
                <img src={cover} alt="" className='h-[350px] rounded-tl-[100px] sm:h-[500px] z-10 w-full object-cover relative'/>
            </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}

export default Hero