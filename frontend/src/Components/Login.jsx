import  { useState } from 'react';
import { loginUser } from '../../service/api.js';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({ username, password })
            .then(data => alert(data))
            .catch(error => alert('Login failed!', error));
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                
            </form>
            <button onClick={()=>navigate('/')}>Registration</button>
        </div>
    );
}

export default Login;
