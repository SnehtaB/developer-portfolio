import { urlFor } from "@/sanity"
import { PageInfo } from "@/typings"
import { motion } from "framer-motion"
import React from 'react'

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center
     top-20'>
            <h3 className='absolute top-1 uppercase tracking-[20px] text-gray-500
        text-2xl md:top-9 md:ml-24' >About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={urlFor(pageInfo?.heroImage).url()}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10 relative top-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        brief</span> background description
                </h4>
                <p className="text-base">
                   {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}

export default About