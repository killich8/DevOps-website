import React from 'react'
/*import Tilt from "react-tilt";*/
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from 'framer-motion/client';
import { Tilt } from 'react-tilt';




const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}> 
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
        I am a professional AI DevOps Engineer focusing on automation, 
        cloud infrastructure, CI/CD, container orchestration, Design and develop AI models to solve business problems. 
        My strength lies in building scalable, reliable, and secure deployment pipelines. 
        With a strong ability to quickly adapt and a practical mindset towards problem-solving, 
        I work with teams in developing workflows that will allow them to ensure high performance and cost-effective software delivery.
    </motion.p>

   
 
    
    
    </>
  )
}

export default SectionWrapper(About, "about");