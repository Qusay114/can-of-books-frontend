import React from 'react';
//bootstrap component
import Carousel from 'react-bootstrap/Carousel';

class BookCarousel extends React.Component{
  render(){
    const items = this.props.books.map(book => {
      return (
<Carousel.Item>
<img
  className="d-block w-100"
  src="https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595-scaled.jpg"
  alt="First slide"
/>
<Carousel.Caption>
  <h3>{book.name}</h3>
  <p>{book.description}</p>
</Carousel.Caption>
</Carousel.Item> 
      )
})
    return(
      <Carousel >
        {items}
      </Carousel>
    )
  }
}

export default BookCarousel ;
