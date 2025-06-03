import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App = () => {
    return (
        <div>
            <h1>Authentication</h1>
            <SignUp />
            <SignIn />
        </div>
    );
};

export default App;
