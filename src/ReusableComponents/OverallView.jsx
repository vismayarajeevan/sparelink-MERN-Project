import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ChoiceItems from '../Components/ChoiceItems';
import { colors } from '../colors';





const OverallView = ({ items = [], title }) => {

    const [show, setShow] = useState(false);
    const [searchKey, setSearchKey] = useState("");
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    // Filter items based on search input
    const filteredItems = items?.filter((item) =>
      item.partName.toLowerCase().includes(searchKey.toLowerCase())
    );

  return (
    <div className="container py-4">
    <div className="d-flex align-items-center justify-content-between p-4">
      <Form>
        <Form.Control
          type="search"
          placeholder="Search here..."
          value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          style={{ width: "300px", border: "none", background: "#F0F0F0" }}
          aria-label="Search"
        />
      </Form>
      {/* <div>
        <img
          src={filter}
          alt="filter"
          className="img-fluid"
          width={"30px"}
          onClick={handleShow}
        />
      </div> */}
    </div>

    {/* Cards displaying items */}
    <Container fluid className="p-4">
      <h2 className="mb-4">{title}</h2>
      <Row className="g-4">
        
    {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Col
                key={item._id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="d-flex justify-content-center"
              >
                <ChoiceItems part={item} />
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">No items found.</p>
          )}
      </Row>
    </Container>

    
  </div>
  )
}

export default OverallView