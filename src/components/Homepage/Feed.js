import React from 'react';
import { Link } from 'react-router-dom';



const Feed = ({ posts }) => {
  return (
    <div className='mt-5 ml-4 items-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5'>
      {posts.map(post => (
        <div className='rounded overflow-hidden shadow-lg bg-white' key={post.id}>
          <Link to={`dashpage/${post.id}/overview`}>
            <div className='mx-auto relative'>
              <img src={`/images/${post.image_ref}`} className='w-full'/>
              <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{post.address}</div>
                <p>{post.prop_type}</p>
                <p>{post.sale_type}</p>
                <p>{post.price}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Feed