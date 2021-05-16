import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//bootstrap components
import Button from 'react-bootstrap/Button'

function LoginButton() {
    const { isAuthenticated, loginWithRedirect, } = useAuth0();
    console.log(isAuthenticated);

    return !isAuthenticated && (
        <Button onClick={loginWithRedirect}>Log in</Button>
    );
}

export default LoginButton; 