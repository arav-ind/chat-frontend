import React, { useState } from 'react'
import { IoIosChatbubbles } from 'react-icons/io'
import { CgMenu } from 'react-icons/cg'
import Link from 'next/link'

const Navbar = () => {

    const [menuItems, setMenuItems] = useState(false)

    return (
        <nav className='fixed h-auto w-full top-0 flex flex-col py-3 bg-[#191c26] px-10'>
            <div className='flex justify-between'>
                <div className='flex items-center justify-center text-[#16d991]'>
                    <Link href='/'><IoIosChatbubbles className='w-10 h-10' /></Link>
                </div>
                <div className='md:flex hidden items-center gap-10'>
                    <Link href='/signin' className='hover:text-[#16d991]'>Sign-In</Link>
                    <Link href='/register' className='hover:text-[#16d991]'>Register</Link>
                </div>
                <div className='md:hidden flex items-center cursor-pointer' onClick={() => setMenuItems(!menuItems)}>
                    <CgMenu className='w-8 h-8' />
                </div>
            </div>
            <div>
                <div className='w-full flex flex-col items-end gap-4 mt-4' style={{ 'display': menuItems ? 'flex' : 'none' }}>
                    <Link href='/signin' className='hover:text-[#16d991]'>Sign-In</Link>
                    <Link href='/register' className='hover:text-[#16d991]'>Register</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar