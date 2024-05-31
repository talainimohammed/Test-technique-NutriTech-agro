import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === 'admin' && password === 'admin') {
            navigate('/admin');
        }
    };

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1> 
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="username" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type='password' className="form-control" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
        </div>
    );
};

export default Login;