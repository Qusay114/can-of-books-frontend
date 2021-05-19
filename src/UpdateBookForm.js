import React from 'react' ;
//bootstrap components
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateBookForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bookName : this.props.selectedBook.name ,
      bookDescription:this.props.selectedBook.description ,
    }
  }

  render(){

    return(
      <>
      <Modal show={this.props.showUpdateForm} onHide={this.props.handleCloseUpdateForm} size='lg'>
      <Modal.Header >
        <Modal.Title>Update book</Modal.Title>
      </Modal.Header>
      <Modal.Body> 
      <Form onSubmit={this.props.updateBook}>
        <Form.Group style={{width:'20rem'}}>
          <Form.Control type='text' name='bookName' placeholder='your favourite book'  value={this.state.bookName} onChange={async (event) =>  await this.setState({bookName:event.target.value}) } />
          <Form.Control type='text' name='bookDescription' placeholder='a brief description about the book'  value={this.state.bookDescription} onChange={async (event) =>  await this.setState({bookDescription:event.target.value}) } />      
          <Button type='submit'>Update</Button>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleCloseUpdateForm}>
          Close
        </Button>
       
      </Modal.Footer>
    </Modal>
    </>

    )
  }
}

export default UpdateBookForm ;