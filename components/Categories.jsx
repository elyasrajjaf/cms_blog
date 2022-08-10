import { useState, useEffect } from "react"
import Link from "next/dist/client/link"
import { getCategories } from "../services"


const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-white rounded-2xl p-8 mb-8 pb-5'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map(category => (
        <Link
          key={category.slug}
          href={`/category/${category.slug}`}
        >
          <span className="cursor-pointer block pb-3 mb-3 text-md transition duration-500 hover:text-blue-600">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories