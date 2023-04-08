import React from 'react'

const Signin = () => {
    return (
        <>
            <div className='flex justify-center items-center px-10 my-16'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold py-10 self-center'>Sign-In</h1>
                    <form className='flex flex-col gap-6'>
                        <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='email' placeholder='Enter Your Email' />
                        <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='password' placeholder='Enter Your Password' />
                        <input
                            className='w-80 h-10 rounded-lg bg-[#16d991] hover:bg-[#06ffa4] text-[#3f3f3f] text-lg font-semibold'
                            type='submit' value='Submit'
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin
