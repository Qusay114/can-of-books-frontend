import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap components
import Card from 'react-bootstrap/Card';

import './Login.css';
import LoginButton from './LoginButton';


class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' , marginTop:'15rem' , marginLeft:'35rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
          <LoginButton />
          {/* done */}
        </Card.Body>
      </Card>
      
    )
  }
}

export default Login;