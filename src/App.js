import React, { useState } from 'react';
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
    <div>
      <NavBar />
      <CreatePostForm addPost={AddNewPost} />
      <PostList posts={posts} />
      
    </div>
  );
}

export default App;
