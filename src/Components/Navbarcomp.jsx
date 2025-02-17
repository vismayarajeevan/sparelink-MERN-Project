

import React, { useState, useEffect } from "react";
import { Navbar, Container, Form, Nav } from "react-bootstrap";
import user from "../assets/user.svg";
import logo from "../assets/logo.png";
import { MapPin } from "lucide-react";

const Navbarcomp = ({ handleLoginClick }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    // Check if Geolocation is supported
    if ("geolocation" in navigator) {
      // Show alert to request permission
      alert("This website would like to access your location to provide a better experience.");

      // Get current position
      // navigator.geolocation.getCurrentPosition(
      //   (position) => {
      //     const { latitude, longitude } = position.coords;
      //     // Use a reverse geocoding API to get the location name
      //     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
      //       .then(response => response.json())
      //       .then(data => {
      //         const city = data.city || data.locality || "Unknown Location";
      //         const country = data.countryName || "Unknown Country";
      //         setLocation(`${city}, ${country}`);
      //       })
      //       .catch(() => {
      //         setLocation("Unknown Location");
      //       });
      //   },
      //   (error) => {
      //     console.error("Error fetching location:", error);
      //     setLocation("Location access denied or unavailable.");
      //   }
      // );






      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error("Error fetching location:", error);
        },
        { enableHighAccuracy: true } // Forces GPS over IP-based location
      );
      
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-light py-2">
        <Container>
          {/* Logo and Search Bar in Same Row for Large Screens */}
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center gap-3">
                <img src={logo} className="img-fluid" width="50px" alt="Logo" />
                {/* Search Bar for Large Screens */}
                <Form className="d-none d-lg-block">
                  <Form.Control
                    type="search"
                    placeholder="Search here..."
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
              {/* Location Below Logo */}
              <div className="d-flex align-items-center gap-1 mt-1">
                <MapPin size={16} className="text-danger" />
                <span className="text-secondary" style={{ fontSize: "13px" }}>
                  {location}
                </span>
              </div>
            </div>
            {/* Navbar Toggle */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="w-100 mt-2">
            {/* Search Bar for Small Screens */}
            <Form className="w-100 d-lg-none mb-2">
              <Form.Control
                type="search"
                placeholder="Search here..."
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  border: "none",
                  background: "#F0F0F0",
                  height: "35px",
                }}
                aria-label="Search"
              />
            </Form>

            {/* Navigation Links */}
            <Nav className="me-auto gap-lg-4 gap-2">
              <Nav.Link
                href="#home"
                style={{ fontWeight: '600', fontSize: "16px" }}
                className={activeLink === "home" ? "active" : "text-secondary"}
                onClick={() => setActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#posts"
                style={{ fontWeight: '600', fontSize: "16px" }}
                className={activeLink === "posts" ? "active" : "text-secondary"}
                onClick={() => setActiveLink("posts")}
              >
                My Posts
              </Nav.Link>

              <Nav.Link
                href="#profile"
                className={`d-inline d-lg-none ${activeLink === "profile" ? "active" : "text-secondary"}`}
                onClick={() => setActiveLink("profile")}
              >
                Profile
              </Nav.Link>
            </Nav>

            <div>
              {/* Show image on large screens */}
              <button onClick={handleLoginClick} className="btn d-none d-lg-inline">
                <img src={user} className="img-fluid" width="40px" alt="" />
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcomp;