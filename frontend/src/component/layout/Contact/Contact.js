import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:trishank03@gmail.com">
        <Button>Contact: trishank03@gmail.com</Button>
       
      </a>
      <h1 className="mailBtn"> Phone No:- +91 9392533645</h1>
    </div>
  );
};

export default Contact;