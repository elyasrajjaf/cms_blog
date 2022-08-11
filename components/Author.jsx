import Image from "next/image"
import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => {

  return (
    <div className="text-center mt-20 mb-8 relative p-12 rounded-2xl bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-semibold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  )
}

export default Author