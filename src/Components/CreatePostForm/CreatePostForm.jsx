import { useState } from 'react';


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
            <div className='card mb-6'>
                <div className='form-group'>
                    <label htmlFor="fullName"><h5>Name</h5></label>
                    <input type="text" className="form-control" id="fullName" onChange={(event) => setName(event.target.value)} value={name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="message"><h5>Post</h5></label><br></br>
                    <textarea rows="5" cols="100" name="comment" form="usrform" onChange={(event) => setMessage(event.target.value)} value={message}></textarea>
                
                </div>
                <button style={{ width: '100px' }} type="submit" className="btn btn-primary">Create</button>
            </div>
       </form>
     );
}
 
export default CreatePostForm;