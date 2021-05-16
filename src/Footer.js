import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
        <div style={{position:'absolute' , width:'100%' , top:'100%'}}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand>&copy; Best Books</Navbar.Brand>
      </Navbar>
      </div>
    );
  }
}

export default Footer;