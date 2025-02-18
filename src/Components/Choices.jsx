import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ChoiceItems from "./ChoiceItems";

const dummyData = [
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
    partName: "RAM",
    image: "https://i.pinimg.com/550x/a4/70/c5/a470c5e6012cd03aaacc74ce1801668f.jpg",
    description: "Fast and efficient memory for multitasking.",
    price:"2000"
  },
  {
    _id: "4",
    partName: "SSD",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/tata-automobile-part-2229176603-qgg4ei78.jpg",
    description: "Reliable and fast storage for all your needs.",
    price:"2000"
  },
];

const Choices = () => {
  const [searchKey, setSearchKey] = useState("");

  // Filtering the dummyData based on search input
  const filteredParts = dummyData.filter((part) =>
    part.partName.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="container py-4">
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 font-weight-bold text-dark">Your Choices</h2>
          <Link
            to="/choices"
            state={{ parts: dummyData }} // Passing dummyData
            className="d-flex align-items-center text-primary hover:text-blue-700"
          >
            See All
            <ChevronRight className="ms-2" />
          </Link>
        </div>
        <Form onSubmit={(e) => e.preventDefault()} className="d-none d-lg-block">
          <Form.Control
            type="search"
            placeholder="Search here..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            style={{
              width: "250px",
              border: "none",
              background: "#F0F0F0",
              height: "35px",
            }}
            aria-label="Search"
          />
        </Form>
      </div>
      <Row className="g-4">
        {filteredParts.length > 0 ? (
          filteredParts.map((part) => (
            <Col
              key={part._id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <ChoiceItems part={part} />
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No matching parts found.</p>
        )}
      </Row>
    </div>
  );
};

export default Choices;
