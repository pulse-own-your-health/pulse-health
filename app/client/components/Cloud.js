/**
 * Created by Valentin on 07/10/2017.
 */

import React from 'react';
import './Cloud.css';
import hpiCloud from "../assets/gesundheitscloud.png";

import {Media, ButtonToolbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

export class Cloud extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-1"></div>
        <div className="col-xs-10">
          <div className="row">
            <h2 className="pulse-orga-heading">Non-profits</h2>
          </div>
          <div className="row">
            <Media>
              <Media.Left align="top">
                <img width={64} src={hpiCloud} />
                <ButtonToolbar>
                  <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={0}>inaktiv</ToggleButton>
                    <ToggleButton value={1} className="pulse-radio-active">aktiv</ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </Media.Left>
              <Media.Body>
                <Media.Heading>HPI Gesundheitscloud</Media.Heading>
                <p>Share with the patient-centric platform for health data, operated by a non-profit,
                  and allow your doctor to check on your data.</p>
              </Media.Body>
            </Media>
          </div>
        </div>
        <div className="col-xs-1"></div>
      </div>
    );
  };
}
