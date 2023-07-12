import React, { useState } from 'react';


function App() {

  const [post, setPost] = useState([{name: "John Doe", post: "It's raining outside.."}])

  return (
    <div>
      <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Post</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>It's raining outside...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
