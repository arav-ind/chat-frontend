import { AxiosPostMFD } from '@/api/api'
import Avatar from '@/components/Avatar'
import HeadComponent from '@/components/HeadComponent'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const RegisterUser = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>()
  const [imageUrl, setImageUrl] = useState<string>('/default-avatar.jpg')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please enter required details King!')
      return
    }

    if (password !== confirmPassword) {
      alert('Passwords don\'t match King!')
      return
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    if (selectedImage) {
      formData.append('image', selectedImage)
    }

    const result = await AxiosPostMFD(formData)
    if (result?.status === 200) {
      router.push('/chat')
    } else if (result?.status === 403) {
      alert('User already exists!')
    } else {
      alert('Unable to Register! Please try again.')
    }
  }


  return (
    <>
      <HeadComponent title='Register' />
      <div className='flex justify-center items-center px-10 my-16'>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold py-10 self-center'>Register</h1>
          <form className='flex flex-col gap-6' onSubmit={(e) => handleSubmit(e)}>
            <Avatar
              imageUrl={imageUrl}
              setSelectedImage={(e) => setSelectedImage(e.target.files?.[0])}
            />
            <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='text' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
            <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
            <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
            <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='password' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
            <input className='w-80 h-10 rounded-lg bg-[#16d991] hover:bg-[#06ffa4] text-[#3f3f3f] text-lg font-semibold' type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterUser
