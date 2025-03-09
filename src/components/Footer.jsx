import { SOCIAL_MEDIA_LINKS } from '../constants'
import {motion} from 'framer-motion'


const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex items-center justify-center">
            <motion.h1 
              initial={{opacity: 0}}
              whileInView={{opacity:1}}
              transition={{duration:0.5}}
              className="my-20 text-xl">SOUHAIL-BOUGHRIOUL</motion.h1>
        </div>
        <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                <motion.a
                  initial={{opacity:0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 0.2, delay: index*0.5}}
                  href={link.href} key={index} target='_blank' rel='noopener noreferrer'>{link.icon}</motion.a>
            ))}
        </div>
    </div>
  )
}

export default Footer