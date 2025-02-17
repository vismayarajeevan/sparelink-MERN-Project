import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import SubmitButtons from '../ReusableComponents/SubmitButtons'


const OtpModal = () => {
  return (
    <Modal centered show={showOtpModal} onHide={() => setShowOtpModal(false)}>
      <Modal.Header closeButton style={{ borderBottom: 'none' }}>
        <Modal.Title className='w-100 text-center'>Enter OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-5 pe-5">
         <div >
              <p>An OTP has been sent to the provided email address 
      <a href="" className='ms-1'>{enteredEmail}. </a> </p>
      <p>Please enter the OTP to proceed.</p>
      </div>
      <div className='mt-5 mb-5'>
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: "50px", 
                height: "50px", 
                fontSize: "1.2rem", 
                textAlign: "center", 
                margin: "0 5px", 
                border: "1px solid #ccc", 
                borderRadius: "4px", 
              }}
            />
          )}
        />
        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
      </div>
     
      <div>
          <Form>
  
          </Form>
      </div>
              <SubmitButtons onClick={handleOtp}>
              {isLoading ? (
                  <>
                    <Spinner
                      animation="border"
                      role="status"
                      size="sm"
                      className="me-2"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    Verifying...
                  </>
                ) :" Submit "
                }
              </SubmitButtons>
         
      </Modal.Body>
      
    </Modal>
  )
}

export default OtpModal