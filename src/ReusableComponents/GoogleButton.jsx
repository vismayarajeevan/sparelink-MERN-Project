import React from 'react'
import google_img from '../assets/google.png'
import { Button } from 'react-bootstrap'


const GoogleButton = () => {
  return (
    <Button
    // onClick={handleGoogleLogin}
    className="w-100 mb-3 p-2"
    style={{ background: "#fff", color: "#000", border: "1px solid #ccc",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",border:'none', transition:"box-shadow 0.3s ease-in-out" }}
  >
    <img src={google_img} className='img-fluid' width={'35px'} height={'35px'} alt="" />
    Continue with Google
  </Button>
  )
}

export default GoogleButton