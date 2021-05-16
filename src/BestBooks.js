import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import './BestBooks.css';

import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0; 
    console.log(this.props.auth0);
    return(
      <>
      { isAuthenticated && 
      <Jumbotron>    
        {/* <h1>My Favorite Books</h1> */}
        {/* <p>
          This is a collection of my favorite books
        </p>  */}
        <ListGroup variant="flush">
          <ListGroup.Item> <h3>My Favorite Books:</h3></ListGroup.Item>
          <ListGroup.Item>book number 1</ListGroup.Item>
          <ListGroup.Item>book number 2</ListGroup.Item>
          <ListGroup.Item>book number 3</ListGroup.Item>
      </ListGroup>    
      </Jumbotron>
    }
    </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
