import React from 'react'
import img from '../images/scalw.jpg'


function GalleryImages() {
    return (
        <div className='relative flex justify-center z-10'>
          <img className='h-full opacity-30' src={img} alt="img"/>
          <h1 className='absolute top-28 text-purple-600 font-black tracking-wider leading-relaxed lg:text-6xl md:text-5xl sm:text-4xl text-3xl  text-center font-secular select-none'>אתר מכירות לכלל יחידות צהל</h1>
          <h2 className='absolute top-52 font-secular text-3xl text-purple-700 select-none text-center'>לפרטים נוספים לחץ המשך</h2>
          <button className="bg-yellow-500 font-secular absolute bottom-1/3 px-8 py-4 rounded-md text-xl border-indigo-900 border-4 text-center cursor-pointer">התחל</button>
        </div>
    )
}

export default GalleryImages
