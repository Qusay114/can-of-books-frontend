import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//boostrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//css files
import './BestBooks.css';
//libraries
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
//created components
import Books from './Books';
import BookFormModal from './BookFormModal';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books:[],
      show:false,
    }
  }

  async componentDidMount() {
    const email = this.props.auth0.user.email ; 
    const booksReq = await axios.get(`http://localhost:3002/books?email=${email}`);
    console.log('test' , booksReq.data);
    await this.setState({books:booksReq.data});
  }

  addBook = async (event) => {
    event.preventDefault();
    const bookData = {
      bookName:event.target.bookName.value,
      description:event.target.description.value , 
      email:this.props.auth0.user.email ,
    }
    const postBook = await axios.post(`http://localhost:3002/books` , bookData);
    await this.setState({books:postBook.data.books})
    console.log('the data from post request' , postBook.data.books);
  }
  
  deleteBook = async (index) => {
    const id= index ;
    const query = {     
      email:this.props.auth0.user.email,
    }
    const filteredBooks = await axios.delete(`http://localhost:3002/books/${id}` , {params:query}) ; 
    console.log('books after deletion',filteredBooks);
    await this.setState({books:filteredBooks.data});
  }

  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});

  render() {
    const { isAuthenticated } = this.props.auth0; 
    console.log(this.props.auth0);
    return(
      <Row>
      { isAuthenticated && 
      <Col>
          { this.state.books.length > 0 &&
          <>
        
          <Books books={this.state.books} deleteBook={this.deleteBook} />
          </>
          }
      </Col>
    }
    <Col>
      <BookFormModal addBook={this.addBook} show={this.state.show} 
      handleClose={this.handleClose} handleShow={this.handleShow}  />
    </Col>
    </Row>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
