import React from 'react';
import { Link } from 'react-router-dom';


// import '../../css/post.css';

const Post = ({ post }) => {
  return (
    <div className=' max-w-sm rounded overflow-hidden shadow-lg'>
      <Link to={`dashpage/${post.id}/overview`}>
        <div className='mx-auto relative' style={{ width: '18rem' }}>
          <img variant="top" src={`/images/${post.image_ref}`} height="280px" width="280px"/>
          <div>
          <div>{post.address}</div>
            <p>{post.prop_type}</p>
            <p>{post.sale_type}</p>
            <p>{post.price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post

{/* <img src={`/images/${post.image_ref}`} height="280px" width="280px"/> */}