import React from 'react';


const Post = ({ post }) => {
    return ( 
       <div className='card mb-3'>
          <div className='card-body'>
            <h4 className='card-title'>{post.name}</h4>
            <p className='card-text'>{post.message}</p>
          </div>
       </div>
     );
}
 
export default Post;
