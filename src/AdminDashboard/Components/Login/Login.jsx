import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

const Login = ({IsLoggedIn,setIsLoggedIn}) => {
    const [username, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://djangobackend-a2a0ae47b6ab.herokuapp.com/api/v1/login', {
                username,
                password
            });
            console.log(response.data);
            setError('');
            setIsLoggedIn(true);
            navigate('/admin');
        } catch (err) {
            setError('Invalid credentials');
        }
    };
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1> 
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="username" value={username} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type='password' className="form-control" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
                {error && <div className='alert alert-danger'>{error}</div>}
            </form>
        </div>
    );
};

export default Login;