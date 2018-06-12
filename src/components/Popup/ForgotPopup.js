import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col , Form, FormGroup, Input } from 'reactstrap';
import './Popup.css';

class ForgotPopup extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} className="login-poopup">
            <ModalHeader toggle={this.props.toggle}>
              <h2 className="text-uppercase">Forgot Your Password</h2>
              <span>If you have forgotten your password, please enter your account's email address below and click 'Retrieve Password' button.</span>
            </ModalHeader>
            <ModalBody>
            <Form>
                <div className="form-row">
                    <Col sm={12} className="pb-2"> 
                        <FormGroup >
                            <Input type="email" name="Full Name" id="Name" placeholder="Email Address" />
                        </FormGroup> 
                    </Col>
                </div>

                <div className="pb-4">
                    <Button color="danger" className="text-uppercase" block>RETRIEVE PASSWORD</Button>
                </div>

            </Form>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ForgotPopup;