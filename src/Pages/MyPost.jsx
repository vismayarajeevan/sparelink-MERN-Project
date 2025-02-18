import React from 'react'
import Navbarcomp from '../Components/Navbarcomp'
import ChoiceItems from '../Components/ChoiceItems'
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { debounce } from 'lodash';
import { BsThreeDotsVertical, BsPencilSquare,BsTrash } from 'react-icons/bs';
import './Mypost.css'

const MyPost = () => {
     // Dummy data or fetch from API
  const part = [
    {
      _id: "1",
      partName: "Car Part",
      image: "https://w0.peakpx.com/wallpaper/444/200/HD-wallpaper-engine-parts-car-parts-engine-connecting-rods-clutch-disc-car-parts-concepts-engine-repair.jpg",
      description: "High-performance processor for gaming and work.",
      price:"2000"
    },
    {
      _id: "2",
      partName: "Alternator Engine",
      image: "https://p.kindpng.com/picc/s/374-3748298_alternator-engine-car-vehicle-parts-part-spare-clipart.png",
      description: "Powerful GPU for smooth and realistic graphics.",
      price:"3000"
    },
    {
      _id: "3",
      partName: "Car Part",
      image: "https://i.pinimg.com/550x/a4/70/c5/a470c5e6012cd03aaacc74ce1801668f.jpg",
      description: "Fast and efficient memory for multitasking.",
      price:"2000"
    },
    {
      _id: "4",
      partName: "Car Part",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/tata-automobile-part-2229176603-qgg4ei78.jpg",
      description: "Reliable and fast storage for all your needs.",
      price:"2000"
    },
  ];
  return (
    <div>
        {/* <Navbarcomp />
     <Container className='mt-5'>
    
            <ChoiceItems  part={part} />
      </Container> */}

<Navbarcomp />
      <Container className="py-5">
      
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-4">
          {part.map((product) => (
            <Col key={product._id}>
              <Card className="h-100 position-relative">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={product.image} />
                  <Dropdown className="card-dropdown">
                    <Dropdown.Toggle variant="light" size="sm" className="no-arrow rounded-circle">
                      <BsThreeDotsVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleEdit(product._id)}>
                        <BsPencilSquare className="me-2" /> Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDelete(product._id)} className="text-danger">
                        <BsTrash className="me-2" /> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

  
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{product.partName}</h5>
                    <span className="price">₹ {product.price}</span>
                  </div>
                  <Card.Text>{product.description
                  }</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MyPost