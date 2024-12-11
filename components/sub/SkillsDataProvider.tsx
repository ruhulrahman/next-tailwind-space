'use client'

import { Tooltip } from "@nextui-org/tooltip";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
// import { Tooltip } from "@nextui-org/react";

interface Props {
    src: string
    width: number
    height: number
    index: number
    title: string
}

const SkillsDataProvider = ({ src, width, height, index, title }: Props) => {

    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const animationDelay = 0.3

    return (
        
        <Tooltip key={index} color={'warning'} content={'Hello world'} className="capitalize">
        <motion.div
            ref={ref}
            initial='hidden'
            variants={imageVariants}
            animate={inView ? 'visible' : 'hidden'}
            custom={index}
            title={title}
            transition={{ delay: index * animationDelay }}
        >
            
            <Image
                src={src}
                height={height}
                width={width}
                alt='skill image'
            />
        </motion.div>
          </Tooltip>
    )
}

export default SkillsDataProvider