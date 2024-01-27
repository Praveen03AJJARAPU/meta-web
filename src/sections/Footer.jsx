import { motion } from 'framer-motion'
import { footerVariants } from '../utils'
import { socials } from '../constants'

const Footer = () => {
  return (
    <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className='py-8 relative'
    >
        {/* <div className='footer-gradient object-contain' /> */}
        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className='font-bold md:text-[64px] text-[44px] text-white'>Enter the metaverse</h4>
                <button className='flex items-center h-fit py-4 px-6 bg-[#25628b] rounded-[32px] gap-[12px]'>
                    <img src="/headset.svg" alt="headset" 
                    className='w-[24px] h-[24px] object-contain'
                    />
                    <span className='font-normal text-[16px] text-white'>ENTER METAVERSE</span>
                </button>
            </div>

            <div className='flex flex-col'>
                <div className='mb-[50px] h-[2px] bg-white opacity-10'>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h4 className='font-extrabold text-[24px] text-white'>Metaversus</h4>
                        <p className='font-normal text-[14px] text-white opacity-50'>Copyright 2022 - 2023 Meataverse. All right reserved</p>
                        <div>
                            {socials.map((social) => {
                                <img src={social.url} key={social.name} alt="img" className='w-[24px] h-[24px] object-contain cursor-pointer' />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer