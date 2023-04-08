import { AxiosPost } from '@/api/api'
import HeadComponent from '@/components/HeadComponent'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (email === '' || password === '') {
            alert('Please enter required details King!')
            return
        }

        const formData = {
            email,
            password
        }

        const result = await AxiosPost(formData)
        if (result?.status === 200) {
            router.push('/chat')
        } else {
            alert('User not found!')
        }
    }

    return (
        <>
            <HeadComponent title='Signin' />
            <div className='flex justify-center items-center px-10 my-16'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold py-10 self-center'>Sign-In</h1>
                    <form className='flex flex-col gap-6' onSubmit={(e) => handleSubmit(e)}>
                        <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                        <input className='w-80 h-10 rounded-lg pl-5 focus:outline-none' type='password' placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
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
