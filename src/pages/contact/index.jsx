import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="text-center">
          <h1 className="text-2xl font-bold">This is the contact page</h1>
          <br />
      <Link to="/">Click to view our home page</Link>
    </div>
  );
}

export default Contact;
