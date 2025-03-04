import React from "react";
import Contact from "../Contact/Contacts";
import Question from "../Question/Question";
import Navbar from "../../components/header/Header";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Question />
    </>
  );
};

export default ContactPage;
