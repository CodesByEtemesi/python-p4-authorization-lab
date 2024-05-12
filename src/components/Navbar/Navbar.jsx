import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container">
                {/* Logo and Links section  */}
                <div>
                    <a 
                    href="#"
                    className='text-brandWhite font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                    >
                        Store Center
                    </a>
                    {/* Menu Items  */}
                    <div> </div>
                </div>
                
                {/* Navbar Right Section  */}
            </div>
        </div>
    </div>
  )
}

export default Navbar