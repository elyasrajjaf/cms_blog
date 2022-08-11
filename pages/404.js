import Link from 'next/link'

export default function FourOhFour() {
    return (
        <div className='flex justify-center align items-center h-96'>
            <div className='block text-center'>
                <h1 className='mb-12 px-12 py-4 bg-red-100 border-b border-red-600'>404 - Page non trouvée</h1>
                <Link href="/">
                    <a className='py-3 px-4 bg-white rounded-xl mt-10 hover:bg-gray-200 transition-colors'>
                        Retour
                    </a>
                </Link>
            </div>
        </div>
    )
}