import Link from 'next/link'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='bg-white rounded-2xl w-full py-8 text-center'>
            <p className='mb-5'>Contact me</p>
            <div className='flex justify-center gap-8'>
                <Link
                    href='https://github.com/elyasrajjaf'
                >
                    <a className='text-xl transition duration-500 hover:text-blue-700' target="_blank"><BsLinkedin/></a>
                </Link>
                <Link
                    href='https://github.com/elyasrajjaf'
                >
                    <a className='text-xl transition duration-500 hover:text-blue-700' target="_blank"><BsGithub/></a>
                </Link>
                <Link
                    href='https://github.com/elyasrajjaf'
                >
                    <a className='text-xl transition duration-500 hover:text-blue-700' target="_blank"><BsWhatsapp/></a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer