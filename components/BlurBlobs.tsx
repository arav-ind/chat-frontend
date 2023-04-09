const BlurBlobs = () => {
    return (
        <div className='sm:w-[40rem] z-0 absolute w-72 h-[30rem]'>
            <div className='absolute sm:w-80 w-60 sm:h-80 h-60 bg-[#16d991] rounded-full left-10 mix-blend-multiply filter blur-2xl opacity-30 animate-blob anim-delay-2000'></div>
            <div className='absolute sm:w-80 w-60 sm:h-80 h-60 bg-yellow-300 rounded-full right-10 mix-blend-multiply filter blur-2xl opacity-30 animate-blob anim-delay-4000'></div>
            <div className='absolute sm:w-80 w-60 sm:h-80 h-60 bg-red-300 rounded-full bottom-0 left-[25%] mix-blend-multiply filter blur-2xl opacity-30 animate-blob anim-delay-4000'></div>
        </div>
    )
}

export default BlurBlobs
