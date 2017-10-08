/**
 * Created by Valentin on 07/10/2017.
 */

import React from 'react';
import './Cloud.css';
import hpiCloud from "../assets/gesundheitscloud.png";

import {Media, ButtonToolbar, ToggleButton, ToggleButtonGroup, Modal, FormGroup, FormControl, ControlLabel, Button} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';

export class Cloud extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      showModal: false,
      message: false
    };

    this.login = this.login.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    this.successfulIsVisible = this.successfulIsVisible.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ padding: "15px 0 0 0 " }}>
          <div className="col-xs-1"></div>
          <div className="col-xs-10">
            <div className="row">
              <h2 className="pulse-orga-heading">Donate your data</h2>
            </div>
            <div className="row">
              <Media>
                <Media.Left align="top">
                  <img width={112} src={hpiCloud} />
                  <ButtonToolbar style={{ padding: "10px 0 0 0" }} className="centerBox">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
                      <ToggleButton value={0} className="pulse-radio-inactive">
                        <FontAwesome className="pulse-inactive-icon" name="times"/>
                      </ToggleButton>
                      <ToggleButton value={1} className="pulse-radio-active" onClick={this.open}>
                        <FontAwesome className="pulse-active-icon" name="check"/>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </ButtonToolbar>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>HPI Gesundheitscloud</Media.Heading>
                  <p>Share with the patient-centric platform for health data, operated by a non-profit,
                    and allow your doctor to check on your data.</p>
                  <p className="pulse-logged-in-text" style={{ visibility: this.successfulIsVisible() }}>You're logged in</p>
                </Media.Body>
              </Media>
            </div>
          </div>
          <div className="col-xs-1"></div>
        </div>

        <div className="row">
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Login to Gesundheitscloud</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup controlId="formBasicText">
                  <div className="pulse-login-row">
                    <ControlLabel>User</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter text"
                    />
                  </div>
                  <div className="pulse-login-row">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="password"
                      placeholder="Enter text"
                    />
                    </div>
                  <div className="pulse-login-row">
                  </div>
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn pulse-btn pulse-btn-gray" onClick={this.close}>Cancel</Button>
              <Button className="btn pulse-btn pulse-btn-primary" onClick={this.login}>Login</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }

  login() {
    this.setState(
      {
        message: true
      }
    );
    this.close();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  successfulIsVisible() {
    if (!this.state.message) {
      return "collapse";
    }
    else {
      return "visible";
    }
  }
}
