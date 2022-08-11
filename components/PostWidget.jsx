import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import moment from 'moment'
import { grpahCMSImageLoader } from '../util';

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  console.log(relatedPosts)

  return (
    <div className='bg-white rounded-2xl p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Articles Similaires' : 'Articles Récents'}
      </h3>
      {relatedPosts.map(post => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle absolute h-80 w-full object-cover rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
               {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`} key={post.title} 
            ><a className="text-md transition duration-500 hover:text-blue-600">{post.title}</a></Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget