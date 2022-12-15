import React from 'react';
import Post from './Post';

// import '../../css/feed.css';

const Feed = ({ posts }) => {
  return (
    <div className="feed-item">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed