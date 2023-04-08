import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
