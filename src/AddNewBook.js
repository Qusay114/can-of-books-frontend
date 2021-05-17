import React from 'react';
//bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class AddNewBook extends React.Component{

  sendBookToDB = async (event) => {
    event.preventDefault();
    const queryParams = {
      params:{
      bookName:event.target.bookName.value,
      description:event.target.description.value , 
      status:event.target.status.value,
      }
    }
    console.log(queryParams);
    const postBook = await axios.get(`http://localhost:3002/savebook` , queryParams);
    console.log(postBook.status);
  }
  render(){
    return(
      <Form onSubmit={this.sendBookToDB}>
        <Form.Group>
          <Form.Control type='text' placeholder='your favourite book' name='bookName' />
          <Form.Control type='text' placeholder='a brief description about the book' name='description' />
          <Form.Control type='text' placeholder='how do you rate your book ? good , very good ...' name='status' />
          <Button type='submit'>Add</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default AddNewBook ;
