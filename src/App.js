import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';


function App() {

  const [posts, setPosts] = useState([
    {name: "Dwight Schrute", message: "Always the Padawan, never the Jedi."},
    {name: "Michael Scott", message: "Well, Well, well how the turntables"}
  ]);

  const AddNewPost = (newPost) => {
    setPosts([...posts, { id: posts.length + 1, ...newPost}]);
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-20'>
          <div className='border-box'>
            <NavBar />
          </div>
      <div className='row'>
        <div className='col-md-20'>
          <div className='border-box'>
            <CreatePostForm addPost={AddNewPost} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-20'>
          <div className='border-box'>
            <PostList posts={posts} />
          </div>
        </div>
      </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
