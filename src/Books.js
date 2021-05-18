import React from 'react';
//bootstrap component
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class Books extends React.Component{
  render(){
    const items = this.props.books.map((book , index) => {
      return (
              <Card key={index}>
                <Card.Img src='https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595-scaled.jpg' alt='' />
                <Card.Body>
                  <Card.Text>
                    <h3>Book Name :  {book.name}</h3>
                  </Card.Text>
                  <Card.Text>
                    Book Description : {book.description}                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button onClick={() => this.props.deleteBook(index)}>Delete</Button>
                </Card.Footer>
              </Card>
      )
})

    return(
      <Row >
        {items}
      </Row>
    )
  }
}

export default Books ;

