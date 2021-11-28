import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button style={{
          textTransform: "none"
        }}>Contact: aaquibdilkash@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
