import { motion } from 'framer-motion'
import { fadeIn, planetVariants, staggerContainer } from '../utils'
import Typetext from '../components/Typetext'
import { insights, newFeatures } from '../constants'
import NewFeatures from '../components/NewFeatures'
import InsightComponent from '../components/InsightComponent'

const Insights = () => {
  return (
    <section className='my-20'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full flex   justify-center mx-auto items-center  px-10 flex-col gap-8"
      >
        <div>
          <Typetext title={"| INSIGHT"} />
          <h1 className="lg:text-[44px] text-[20px] font-extrabold text-white text-center ">
            Insight about METAVERSE.
          </h1>
        </div>
        <div className='flex flex-col mt-[50px] gap-4'>
          {insights.map((insight,index) => (
            <InsightComponent key={index} index={index + 1} {...insight} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Insights