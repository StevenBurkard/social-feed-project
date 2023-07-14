import React from 'react';
import Post from '../Post/Post';
import './PostList.css';

const PostList = ({ posts }) => {
    return ( 
        <div className='postList'>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
     );
}
 
export default PostList;