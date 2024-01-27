import { motion } from "framer-motion"
import { fadeIn } from "../utils"
import '../index.css'

const ExploreWorld = ({ id, imgUrl, index, title, active, handleClick}) => {
    
  return (
    <motion.div
    variants={fadeIn('right','spring', index * 0.5, 0.75)}
    className={`relative flex justify-center items-center min-w-[170px] h-[600px] transition-[flex] duration-[0.75s] ease-out-flex cursor-pointer ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} mx-3`} onClick={() => handleClick(id)}
    >
       <img src={imgUrl} className="object-cover rounded-lg w-full h-full" alt="" /> 
       {active !== id ? (
        <h3 className="absolute lg:bottom-20 lg:rotate-[-90deg] text-white text-[24px] lg:origin[0,0]">{title}</h3>
       ) : (
        <div className="bg-[rgba(0,0,0,.5)] w-full absolute bottom-0 flex p-8 flex-col justify-start">
        
            <div className="font-bold">
            <h1 className='text-white text-[24px]'>Enter Metaverse</h1>
            </div>
            <h3 className="text-[24px] text-[#c7c7e7]">{title}</h3>
      
       </div>
       )}
    </motion.div>

  )
}

export default ExploreWorld