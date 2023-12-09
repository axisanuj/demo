import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const datas = [{
        desc:"loreme ipsum dollor sit amet conssectetur adisicing.1",
        filesize:".9mb",
        close:true,
        tag:{isOpen:true , tagTitle:"Download Now", tagColor:'green'}
    },
    {
        desc:"loreme ipsum dollor sit amet conssectetur adisicing.2",
        filesize:".9mb",
        close:false,
        tag:{isOpen:true , tagTitle:"Download Now", tagColor:'blue'}
    },
    {
        desc:"loreme ipsum dollor sit amet conssectetur adisicing.3",
        filesize:".9mb",
        close:true,
        tag:{isOpen:false , tagTitle:"Download Now", tagColor:'green'}
    },
    {
        desc:"loreme ipsum dollor sit amet conssectetur adisicing.3",
        filesize:".9mb",
        close:true,
        tag:{isOpen:false , tagTitle:"Download Now", tagColor:'green'}
    },
];
  return (
    <div ref={ref} className='absolute top-0 h-full w-full p-3 flex flex-wrap gap-7 bg-zinc-700 overflow-hidden'>
        {datas.map((data)=><Card data={data} referance={ref}/>
        )}
    </div>
  )
}

export default Foreground