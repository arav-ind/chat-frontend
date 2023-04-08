import Avatar from '@/components/Avatar'
import HeadComponent from '@/components/HeadComponent'
import { useEffect, useState } from 'react'

const RegisterUser = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>()
  const [imageUrl, setImageUrl] = useState<string>('/default-avatar.jpg')

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])

  const handleSubmit = () => {
  }


  return (
    <>
      <HeadComponent title='Register' />
      <div className='flex justify-center items-center px-10 my-16'>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold py-10 self-center'>Register</h1>
          <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <Avatar
              imageUrl={imageUrl}
              setSelectedImage={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedImage(e.target.files?.[0])}
            />
            <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='text' placeholder='Enter Your Name' />
            <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='email' placeholder='Enter Your Email' />
            <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='password' placeholder='Enter Your Password' />
            <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='password' placeholder='Confirm Password' />
            <input className='w-80 h-10 rounded-lg bg-[#16d991] hover:bg-[#06ffa4] text-[#3f3f3f] text-lg font-semibold' type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterUser
