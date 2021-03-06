import React from 'react'
import '../css/dist.css'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
function HeaderMessages() {
    return (
            <header className='sm:px-16 sm:py-6 px-20 py-20 flex sm:flex-row flex-col flex-wrap items-center bg-white'>
                <div className='flex-1 flex sm:flex-row flex-col items-center justify-between'>
                    <a href="#">
                        <img alt="Logo" src={logo} className='w-40'></img>
                    </a>
                    <nav>                    
                        <ul className='flex sm:flex-row-reverse flex-col-reverse'>
                            <li className='li-style'>
                                <Link to='/'>עלינו</Link>
                            </li>
                            <li className="li-style">חנות</li>
                            <li className="li-style">
                            <Link to='/About'>אודות</Link>
                            </li>
                            <li className="li-style">פרופיל אישי</li>

                        </ul>
                    </nav>
                </div>
            </header>



    )
}

export default HeaderMessages
