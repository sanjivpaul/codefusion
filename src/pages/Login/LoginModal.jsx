import React from 'react';
import './LoginModal.css'; // Optional: for styling
import logo from "../../assets/logo/logo1.png"


const LoginModal = ({ onClose }) => {
  const handleLogin = () => {
    // Handle login logic here
    onClose(); // Close modal after login
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div className="logo-container-login">
        <img src={logo} />
        {/* <div className="codefusion-login">Code Fusion</div> */}
      </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className='form-area'>
          <input className='input-field' type="text" placeholder="Username" required />
          <input className='input-field' type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
