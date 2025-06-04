import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signin', formData);
            localStorage.setItem('token', response.data.token);
            alert('Sign-in successful!');
        } catch (error) {
            alert('Error during sign-in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
