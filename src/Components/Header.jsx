
import React, { useState } from 'react'
import Navbarcomp from './Navbarcomp';
import AuthenticationModal from './AuthenticationModal';
import FrgtPasswordModal from './FrgtPasswordModal';



const Header = () => {

  // state for authentication modal
  const [authenticationModal, setAuthenticationModal]= useState(false)

  // state to check it is register(signup) modal or not
  const[isRegister, setIsRegister] = useState(false)

  // state for eye icon
  const [showPassword, setShowPassword] = useState(false);

  // state for handle forgotpassword modal
  const [ showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)

  // function to show password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // function to display login modal
  const handleLoginClick = () => {
    
    setAuthenticationModal(true)
    setIsRegister(false)
    setShowForgotPasswordModal(false)
  }

  // function to display signup modal
  const handleSignUpClick = () => {
    
    setAuthenticationModal(true)
    setIsRegister(true)
  };


  // to open forgot password modal
  const handleForgotPasswordModal =()=>{
    setShowForgotPasswordModal(true)
    setAuthenticationModal(false)
  }


  return (
    <>
    {/* ***************************Navbar***************************** */}
    <Navbarcomp handleLoginClick={handleLoginClick}/>
    {/* ***************************login and signup modal***************************** */}
    {
      authenticationModal && (
        <AuthenticationModal 
        authenticationModal={authenticationModal}
        setAuthenticationModal={setAuthenticationModal}
        isRegister={isRegister}
        togglePasswordVisibility={togglePasswordVisibility}
          showPassword={showPassword}

          handleSecondaryAction={isRegister ? handleLoginClick : handleSignUpClick}


          handleForgotPasswordModal={handleForgotPasswordModal}
        />

        
        
      )
    }


    {/* ***************************forgotpassword modal***************************** */}

{
  showForgotPasswordModal && (
    <FrgtPasswordModal 
    showForgotPasswordModal ={showForgotPasswordModal}
    setShowForgotPasswordModal={setShowForgotPasswordModal}
    handleLoginClick={handleLoginClick}
    />
  )
}

    </>
   
  );
};

export default Header;
