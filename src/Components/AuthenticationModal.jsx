import React from 'react'
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import Formfield from '../ReusableComponents/Formfield';
import SubmitButtons from '../ReusableComponents/SubmitButtons';



const AuthenticationModal = ({authenticationModal,
    setAuthenticationModal,
    isRegister,
    togglePasswordVisibility,
    handleForgotPasswordModal,
    handleSecondaryAction,
    showPassword,}) => {

  return (
    <>
    <Modal
        show={authenticationModal}
        onHide={() => setAuthenticationModal(false)}
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title className="w-100 text-center">
            {isRegister ? "Sign Up" : "Login"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="ps-5 pe-5">
          <Form>
            {isRegister && (
              <>
                <Formfield
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  id="formUsername"
                  value=""
                 
                />

                
              </>
            )}

            <Formfield
              label="Email"
              type="email"
              placeholder="Enter your email"
              id="formEmail"
              value=""
              
            />
            

            {isRegister && (
              <>
                <Formfield
                  label="PhoneNumber"
                  type="number"
                  placeholder="Enter your phonenumber"
                  id="formPhoneNumber"
                  value=""
                  
                />

                
              </>
            )}

            <Formfield
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              id="formPassword"
              value=""
              
            />

            {/* forgot password */}
            {!isRegister && (
              <div className="d-flex justify-content-end align-items-center mb-3">
                <Button
                  variant="link"
                  size="sm"
                  className="p-0 text-decoration-none"
                 onClick={handleForgotPasswordModal}
                >
                  Forgot password?
                </Button>
              </div>
            )}

            {isRegister && (
              <>
                <Formfield
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  id="formConfirmPassword"
                  value=""
                  
                />
                
              </>
            )}

            <SubmitButtons>
              {isRegister ? 
                  "Sign Up"
            :
                "Login"
              }
            </SubmitButtons>

            {/* Divider */}
            <div className="text-center position-relative my-4">
              <div className="border-top"></div>
              <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 text-muted">
                or
              </span>
            </div>

            {/* Continue with Google */}
            {/* <GoogleButton /> */}

            {/* Secondary action */}
            <p className="text-center text-muted">
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <Button
                onClick={handleSecondaryAction}
                variant="link"
                className="p-0 text-decoration-none"
              >
                {isRegister ? "Login" : "Sign Up"}
              </Button>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AuthenticationModal