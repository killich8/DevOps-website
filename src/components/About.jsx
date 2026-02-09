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
      I am an MLOps Engineer specializing in Machine Learning Operations, automation, cloud infrastructure,
      CI/CD pipelines, container orchestration, and security. I focus on building scalable, reliable, and secure ML
      systems from development to production. With a strong ability to adapt quickly and a hands-on problem-solving mindset,
      I collaborate with cross-functional teams to design efficient workflows that improve
      performance, reliability, and cost-effective software delivery.
    </motion.p>

   
 
    
    
    </>
  )
}

export default SectionWrapper(About, "about");