import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import { ReactComponent as LikeIcon } from './Assets/LikeIcon.svg';
//Couldn't figure out how to add LikeIcon into the PostList.


function App() {

  const [posts, setPosts] = useState([
    {name: "Dwight Schrute", message: "Always the Padawan, never the Jedi."},
    {name: "Michael Scott", message: "Well, Well, well how the turntables"}
  ]);

  const AddToggleLike = (id) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, liked: !post.liked } : post
    );
    setPosts(updatedPosts);
  };

  const AddNewPost = (newPost) => {
    setPosts([...posts, { id: posts.length + 1, ...newPost}]);
  }


  return (
    <div id='body'>
      <div className='container-fluid'>
        <div className='row' id="navBar">
          <div className='col-md-20'>
            <div className='border-box'>
              <NavBar />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-20'>
            <div className='border-box-two'>
              <CreatePostForm addPost={AddNewPost} onToggleLike={AddToggleLike} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-20'>
            <div className='border-box-two'>
              <PostList posts={posts}/>
            </div>
          </div>
        </div>
        
      </div>
  </div>
  );
}

export default App;
