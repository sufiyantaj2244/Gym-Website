import { useState } from 'react';
import { registerUser } from '../../service/api.js';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser({ username, password })
            .then(data => console.log(data))
            .catch(error => console.log('failed', error));
    };

    return (
        <div>
            <h1>Register</h1>
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
                <button type="submit">Register</button>
            </form>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    );
}

export default Registration;
