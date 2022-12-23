import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import '../../css/post.css';

const Post = ({ post }) => {
  return (
      <Link to={`dashpage/${post.id}`}>
        <Card className='mx-auto ' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`/images/${post.image_ref}`} height="280px" width="280px"/>
          <Card.Body>
          <Card.Title>{post.address}</Card.Title>
            <p>{post.prop_type}</p>
            <p>{post.sale_type}</p>
            <p>{post.price}</p>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </Link>
  )
}

export default Post

{/* <img src={`/images/${post.image_ref}`} height="280px" width="280px"/> */}