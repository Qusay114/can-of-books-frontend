import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BestBooks.css';

import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

import BookCarousel from './BookCarousel';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books:[],
    }
  }

  async componentDidMount() {
    const email = this.props.auth0.user.email ; 
    // console.log(email);
    const booksReq = await axios.get(`http://localhost:3002/books?email=${email}`);
    // console.log('test' , booksReq.data);
    await this.setState({books:booksReq.data});
    // console.log( 'books state' , this.state.books);
    // console.log(this.state.books[0].name);
    // console.log('length' , this.state.books.length);
  }

  render() {
    const { isAuthenticated } = this.props.auth0; 
    console.log(this.props.auth0);
    return(
      <Row>
      { isAuthenticated && 
      <Col>
          { this.state.books.length > 0 &&
          <>
        
          <BookCarousel books={this.state.books} />
          </>
          }
      </Col>
    }
    </Row>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
