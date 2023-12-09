import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"


function Card({data ,referance}) {
  return (
    <>
    <motion.div drag dragConstraints={referance} whileTap={{ scale: 1.1 }} className='z-20 relative h-72 w-60 rounded-2xl p-5 bg-zinc-900 text-white overflow-hidden'>
        <FaRegFileAlt />
        <p className='mt-7 text-sm'>{data.desc}</p>
        <div className="absolute footer bottom-0 left-0 w-full">
            <div className='px-5 py-3 flex justify-between items-center'> 
            <h1>{data.filesize}</h1>
              {data.close?<GoDownload className='bg-zinc-500 w-6 h-6 rounded-full p-1'/>:<MdClose className='bg-zinc-500 w-6 h-6 rounded-full p-1'/>}
            </div>
            {data.tag.isOpen &&(
              <div className={`${data.tag.tagColor=="blue"?"bg-blue-600":"bg-green-600"} px-2 py-3`}>
                <h1 className='text-center'>{data.tag.tagTitle}</h1>
            </div>)}
            
        </div>
       
    </motion.div>
    </>

  )
}

export default Card