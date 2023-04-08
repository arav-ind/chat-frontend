import { AvatarPropType } from '@/types/Types'
import Image from 'next/image'
import React from 'react'

const Avatar = ({ imageUrl, setSelectedImage }: AvatarPropType) => {
    return (
        <>
            <label className='overflow-hidden flex items-center justify-center w-24 h-24 rounded-full bg-[#16d991] hover:hover:bg-[#06ffa4] self-center' htmlFor='pic-input' >
                <Image className='' alt={''} src={imageUrl} width={100} height={100} />
            </label>
            <input
                accept='image/*'
                className='hidden'
                type='file'
                id='pic-input'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedImage(e)} />
        </>
    )
}

export default Avatar
