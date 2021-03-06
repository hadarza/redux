import React from 'react'
import GalleryImages from '../components/GalleryImages'
import HeaderMessages from '../components/HeaderMessages';

function HomePage() {
    return (
        <div className="bg-gray-100 w-screen ">
            <HeaderMessages/>
            <GalleryImages/>
        </div>
    )
}

export default HomePage
