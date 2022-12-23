import React from 'react';
import Post from './Post';
import CardGroup from 'react-bootstrap/CardGroup';

// import '../../css/feed.css';

const Feed = ({ posts }) => {
  return (
    <CardGroup className='mt-5 mx-0'>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </CardGroup>
  )
}

export default Feed