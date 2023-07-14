import React from 'react';



const Post = ({ post, onToggleLike }) => {
    return ( 
       <div className='card mb-3'>
          <div className='card-body'>
            <h4 className='card-title'>{post.name}</h4>
            <p className='card-text'>{post.message}</p>
            <button onClick={() => onToggleLike(post.id)}>
              {post.liked ? "Dislike 👎" : "Like 👍"}
            </button>
          </div>
       </div>
     );
}
 
export default Post;
