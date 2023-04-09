import Link from 'next/link'
import BlurBlobs from './BlurBlobs'

export const Welcome = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-screen'>
            <BlurBlobs />
            <div className='flex flex-col gap-5 justify-center items-center h-screen z-10'>
                <h1 className='text-7xl text-[#16d991] font-bold'>Welcome!</h1>
                <h1 className='text-xl font-extralight'>
                    <span className='hover:text-[#16d991] hover:font-outline-2 font-medium'>
                        <Link href='signin'>Sign-In </Link>
                    </span>
                    or
                    <span className='hover:text-[#16d991] hover:font-outline-2 font-medium'>
                        <Link href='/register'> Register </Link>
                    </span>
                    to Continue
                </h1>
            </div>
        </div>
    )
}
