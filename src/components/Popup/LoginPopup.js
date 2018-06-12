import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col , Form, FormGroup, Input } from 'reactstrap';
import ForgotPopup from './ForgotPopup.js';
import SignupPopup from './SignupPopup.js';
import './Popup.css';

class LoginPopup extends React.Component {

    constructor(props) {
    super(props);

    //this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false,
        modal: false,
        forgotPopup: false
    };
    this.toggleDialog = this.toggleDialog.bind(this);
    this.toggleDialog2 = this.toggleDialog2.bind(this);
    }
    toggleDialog() {
        this.setState({modal: !this.state.modal});
    }
    toggleDialog2() {
        this.setState({forgotPopup: !this.state.forgotPopup});
        // this.props.toggle();
    }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} className="login-poopup">
            <ModalHeader toggle={this.props.toggle}>
              <h2 className="text-uppercase">Sign IN</h2>
              <span>Welcome to Sportavida</span>
            </ModalHeader>
            <ModalBody>
            <Form>
                <div className="form-row">
                    <Col sm={12}> 
                        <FormGroup >
                            <Input type="email" name="Full Name" id="Name" placeholder="Email Address" />
                        </FormGroup> 
                    </Col>
                </div>

                <div className="form-row">
                    <Col sm={12}> 
                        <FormGroup >
                            <Input type="password" name="Email Address" placeholder="Password " />
                        </FormGroup> 
                    </Col>
                </div>

                <div className="form-row pt-3 pb-3">
                    <Col sm={6}> 
                        <FormGroup >
                            <label className="custom-checkbox">Remember me
                                <Input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </FormGroup> 
                    </Col>
                    <Col sm={6} className="text-right"> 
                        <FormGroup>
                          <a className="forgot-pass-link" onClick={this.toggleDialog2}>Forgot Password?</a>
                        </FormGroup> 
                    </Col>
                </div>

                <Button color="danger" className="text-uppercase" block>SIGN IN</Button>

                <div className="form-row text-center pt-3 pb-3">
                    <div className="dont-have-account">Dont have an account yet? <a className="pl-1" onClick={this.toggleDialog}>Sign Up</a></div>
                </div>

            </Form>
            </ModalBody>
        </Modal>
        <ForgotPopup isOpen= {this.state.forgotPopup} toggle={this.toggleDialog2} />
        <SignupPopup isOpen= {this.state.modal} toggle={this.toggleDialog} />
      </div>
    );
  }
}

export default LoginPopup;