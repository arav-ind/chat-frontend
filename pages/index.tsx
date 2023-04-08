import HeadComponent from '@/components/HeadComponent'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeadComponent title='Chat' />
      <main>
        <div className='flex flex-col gap-5 justify-center items-center h-screen'>
          <h1 className='text-7xl text-[#16d991] font-semibold'>Welcome!</h1>
          <h1 className='text-xl font-extralight'>
            <span className='hover:text-[#16d991] font-medium'><Link href='signin'>Sign-In </Link></span>
            or
            <span className='hover:text-[#16d991] font-medium'><Link href='/register'> Register </Link></span>
            to Continue</h1>
        </div>
      </main>
    </>
  )
}
