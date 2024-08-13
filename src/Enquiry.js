import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Enquiry() {
  const rName = useRef();
  const rCollege = useRef();
  const rQuery = useRef();
  const rPhone = useRef();
  const rEmail = useRef();

  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  const hName = (event) => {
    setName(event.target.value);
  };
  const hCollege = (event) => {
    setCollege(event.target.value);
  };
  const hEmail = (event) => {
    setEmail(event.target.value);
  };
  const hPhone = (event) => {
    setPhone(event.target.value);
  };
  const hQuery = (event) => {
    setQuery(event.target.value);
  };

  const sm = (event) => {
    event.preventDefault();
    let data = { name, college, email, phone, query };
    emailjs
      .send("service_2140", "template_2140", data, "DuLx7as85v0Lh0iX2")
      .then((res) => {
        setMsg("We will get back to you, Thank You!!");
        setName("");
        setCollege("");
        setEmail("");
        setPhone("");
        setQuery("");
        rName.current.focus();
      })
      .catch((err) => {
        console.log("issue" + err);
        setMsg("There was an issue sending your enquiry. Please try again later.");
      });
  };

  return (
    <>
      <center>
        <h1>Fill the form</h1>
        <form onSubmit={sm}>
          <input
            type="text"
            placeholder="enter name"
            onChange={hName}
            ref={rName}
            value={name}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="enter college name"
            onChange={hCollege}
            ref={rCollege}
            value={college}
            required
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="enter email"
            onChange={hEmail}
            ref={rEmail}
            value={email}
            required
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="enter phone number"
            onChange={hPhone}
            ref={rPhone}
            value={phone}
            required
          />
          <br />
          <br />
          <textarea
            placeholder="enter query"
            rows={3}
            cols={30}
            onChange={hQuery}
            ref={rQuery}
            value={query}
            required
          />
          <br />
          <br />
          <input type="submit" />
          <br />
          <br />
        </form>
        <h2>{msg}</h2>
      </center>
    </>
  );
}

export default Enquiry;
