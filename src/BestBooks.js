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
import UpdateBookForm from './UpdateBookForm';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books:[],
      show:false,
      showUpdateForm:false ,
      selectedBook:{},
      selectedIndex:-1,
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

  handleCloseUpdateForm = () => this.setState({showUpdateForm:false});
  handleShowUpdateForm = async (index) => {
    const selectedBook = this.state.books.filter((book , idx) => idx===index );
    await this.setState({
      selectedBook:selectedBook[0],
      showUpdateForm:true,
      selectedIndex:index,
    })


  };

  updateBook = async (event) => {
    event.preventDefault();
    const index = this.state.selectedIndex ;
    const bookName = event.target.bookName.value ;
    const bookDescription = event.target.bookDescription.value ;
    const reqBody = {
      bookName:bookName,
      bookDescription:bookDescription,
      email:this.props.auth0.user.email,
    }
    const updatedBooks = await axios.put(`http://localhost:3002/books/${index}` , reqBody);
    console.log('updated books' ,updatedBooks);
    await this.setState({books:updatedBooks.data});

  }  
  
  render() {
    const { isAuthenticated } = this.props.auth0; 
    console.log(this.props.auth0);
    return(
      <Row>
      { isAuthenticated && 
      <Col style={{width:'80%'}}>
          { this.state.books.length > 0 &&
          <>
        
          <Books books={this.state.books} deleteBook={this.deleteBook} 
            handleShowUpdateForm={this.handleShowUpdateForm}
          />
          </>
          }
          { this.state.showUpdateForm &&
          <UpdateBookForm showUpdateForm={this.state.showUpdateForm}
            handleCloseUpdateForm={this.handleCloseUpdateForm}
            selectedBook={this.state.selectedBook}
            updateBook={this.updateBook}
            /> 
          }
      </Col>
    }
    <Col style={{width:'20%'}}>
      <BookFormModal addBook={this.addBook} show={this.state.show} 
      handleClose={this.handleClose} handleShow={this.handleShow}  />
    </Col>
    </Row>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
