import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePostForm = ({ addPost }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const sendSubmit = (e) => {
        e.preventDefault();

        addPost({name, message});

        setName('');
        setMessage('');
    }

    return ( 
        <form>
            <div className='form-group'>
                <label for="fullName">Name</label>
                <input type="text" className="form-control" id="fullName"></input>
            </div>
            <div className="form-group">
                <label for="message">Post</label>
                <input type="text" class="form-control" id="message"></input>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
       </form>
     );
}
 
export default CreatePostForm;