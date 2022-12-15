import React from 'react';
import { Link } from 'react-router-dom';

// import '../../css/post.css';

const Post = ({ post }) => {
  return (
      <Link to={`dashpage/${post.id}`}>
        <img src={`/images/${post.image_ref}`} height="280px" width="280px"/>
          <h2>{post.address}</h2>
          <p>{post.prop_type}</p>
          <p>{post.sale_type}</p>
          <p>{post.price}</p>
      </Link>
  )
}

export default Post