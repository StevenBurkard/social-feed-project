import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [posts, setPosts] = useState([{name: "John Doe", message: "It's raining outside.."}])

  return (
    <div>
      <table>
        <thead>
          <NavBar />
            <tr>
              <th>Name</th>
              <th>Message</th>
            </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr>
                <td>{post.name}</td>
                <td>{post.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
