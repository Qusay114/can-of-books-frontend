import React from 'react';
//bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//libraries
import { withAuth0 } from '@auth0/auth0-react';


class BookFormModal extends React.Component{

 
  render(){
    return(
      <>
      <Modal show={this.props.show} onHide={this.props.handleClose} size='lg'>
      <Modal.Header >
        <Modal.Title>Add New book</Modal.Title>
      </Modal.Header>
      <Modal.Body> 
      <Form onSubmit={this.props.addBook}>
        <Form.Group style={{width:'20rem'}}>
          <Form.Control type='text' placeholder='your favourite book' name='bookName' />
          <Form.Control type='text' placeholder='a brief description about the book' name='description' />      
          <Button type='submit'>Add</Button>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={this.props.handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
    <Button variant="primary" onClick={this.props.handleShow}>
          Add new book
        </Button>
    </>

    )
  }
}

export default withAuth0(BookFormModal) ;
