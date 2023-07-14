import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePostForm = ({ addPost }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const sendSubmit = (e) => {
        e.preventDefault();

        addPost({name: name, message: message});

        setName('');
        setMessage('');
    }

    return ( 
        <form onSubmit={sendSubmit}>
            <div className='form-group'>
                <label htmlFor="fullName">Name</label>
                <input type="text" className="form-control" id="fullName" onChange={(event) => setName(event.target.value)} value={name}></input>
            </div>
            <div className="form-group">
                <label htmlFor="message">Post</label>
                <input type="text" className="form-control" id="message" onChange={(event) => setMessage(event.target.value)} value={message}></input>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
       </form>
     );
}
 
export default CreatePostForm;