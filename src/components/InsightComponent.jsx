import { motion } from 'framer-motion'
import { fadeIn } from '../utils'

const InsightComponent = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-4'
    >
      <img src={imgUrl} alt="" className='md:w-[270px] w-full h-[250px] object-cover rounded-[32px]' />
      <div className='w-full flex justify-between items-center'>
        <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px] '>
          <h4 className='text-white font-bold lg:text-[42px] text-[24px]'>{title}</h4>
          <p className='text-[#eef3e6] mt-[16px] lg:text-[20px] text-[14px]'>{subtitle}</p>
        </div>
        <div className='lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent boder-[1px] border-white'>
          <img src="arrow.svg" className='w-[40%] h-[40%] object-contain' alt="" />
        </div>
      </div>
    </motion.div>
  )
}

export default InsightComponent