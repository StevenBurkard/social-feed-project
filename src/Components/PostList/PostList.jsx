import React from 'react';
import Post from '../Post/Post';
import './PostList.css';


const PostList = ({ posts, onToggleLike }) => {
    return ( 
        <div className='postList'>
            {posts.map((post) => (
                <Post key={post.id} post={post} onToggleLike={onToggleLike} />
            ))}
        </div>
     );
}
 
export default PostList;