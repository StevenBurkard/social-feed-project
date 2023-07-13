import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';


function App() {

  const [posts, setPosts] = useState([{name: "John Doe", message: "It's raining outside.."}])

  return (
    <div>
      <NavBar />
      <CreatePostForm />
      
    </div>
  );
}

export default App;
