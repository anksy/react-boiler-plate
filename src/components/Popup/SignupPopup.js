import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col , Form, FormGroup, Input } from 'reactstrap';
import UserIcon1 from '../../assets/images/user.png';
import UserIcon2 from '../../assets/images/more-user.png';
import UserIcon3 from '../../assets/images/approved-user.png';
import ApprovedIcon from '../../assets/images/approved.png';
import './Popup.css';

class SignupPopup extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} className="login-poopup">
            <ModalHeader toggle={this.props.toggle}>
              <h2 className="text-uppercase">Sign up</h2>
              <span>Only one small step and increase your performance</span>
            </ModalHeader>
            <ModalBody>
            <Form>

                <div className="form-row">
                    <ul className="signup-process">
                        <li>
                            <a className="text-center">
                                <div className="signup-process-box">
                                    <img src={UserIcon1} alt="" />
                                    <div className="approved-icon">
                                        <img src={ApprovedIcon} alt="" />
                                    </div>
                                </div>
                                <span>Profile Information</span>
                            </a>
                        </li>
                        <li>
                            <a className="text-center">
                                <div className="signup-process-box">
                                    <img src={UserIcon2} alt="" />
                                    <div className="approved-icon">
                                        <img src={ApprovedIcon} alt="" />
                                    </div>
                                </div>
                                <span>Select User Type</span>
                            </a>
                        </li>
                        <li>
                            <a className="text-center">
                                <div className="signup-process-box">
                                    <img src={UserIcon3} alt="" />
                                </div>
                                <span>Select User Role</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="custom-radio-button">
                    <label class="radio-container">Want to see someone else result
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="radio-container">Adult
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="radio-container">Parents
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="radio-container">Coach
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="radio-container">Other
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>

                    <label class="radio-container">Sponsors
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>
                </div>

                <div className="form-row pt-3 pb-3">
                    <Col sm={12}> 
                        <FormGroup >
                            <label className="custom-checkbox">I agree the <a>Terms &amp; Conditions</a>
                                <Input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </FormGroup> 
                    </Col>
                </div>

                <Button color="danger" className="text-uppercase">SUBMIT</Button>
            </Form>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SignupPopup;