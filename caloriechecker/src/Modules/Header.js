import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/Header.css'

function Header(props) {
  const handleInput = props.handleInput
  const handleLogIn = props.handleLogIn
  const handleSignUp = props.handleSignUp

  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowSignUpModal = () => setShowSignUpModal(true);
  const handleCloseSignUpModal = () => setShowSignUpModal(false);

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in submission logic here
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up submission logic here
  };

  return (
    <div className="buttons">
      <div className="title">
        <a href='/' className="link"> <h1 className="title">Weightloss Tracker</h1> </a>
      </div>
      <div className="button-group">
        <button className="button" onClick={() => navigate('/diary')}>
          Diary
        </button>
        |
        <button className="button" onClick={() => navigate('/create')}>
          Create
        </button>
        |
        <button className="button" onClick={() => navigate('/AboutUs')}>
          AboutUs
        </button>
      </div>

      <Button className='sign' variant="primary" onClick={handleShowLoginModal}>
        SignIn/SignUp
      </Button>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Weightloss Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleInput} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleLogIn}>
              Sign In
            </Button>
            <Button variant="Secondary" type="button" onClick={handleShowSignUpModal}>
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoginModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSignUpModal} onHide={handleCloseSignUpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Weightloss SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="retypePassword" placeholder="Confirm Password" onChange={handleInput} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSignUp}>
              Create Account
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignUpModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
