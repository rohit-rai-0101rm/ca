import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { contactUsApi } from "../../actions/formActions";

const Result = () => {

  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormTouch = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [company, setCompany] = useState(null)
  const [phone, setPhone] = useState(null)
  const [discription, setDiscription] = useState(null)
  const [formType, setformType] = useState("contactUsForm")
  const [time, setTime] = useState("withinEight")

  const handleNameChange = (e) => {
    setName(e.target.value)

  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)

  }
  const handleCompanyChange = (e) => {
    setCompany(e.target.value)

  }
  const handleDiscriptionChange = (e) => {
    setDiscription(e.target.value)

  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)

  }
  const handleTimeChange = (e) => {
    setTime(e.target.value)

  }
  /*console.log("name",name)
  console.log("email",email)
  console.log("company",company)
  console.log("phone",phone)
  console.log("discription",discription)
  console.log("time",time)*/
  const form = useRef();

  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj5dgzp",
        "template_hfduayo",
        form.current,
        "WLENsTkBytC0yvItS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);
  const handleFormSubmit = (e) => {
    e.preventDefault()// to prevent refreshing of page in browser
    console.log()
    dispatch(contactUsApi(name, email, company, phone, discription, time, formType))
  }

  return (
    <form ref={form} onSubmit={(e) => handleFormSubmit(e)} className="axil-contact-form">

      <div className="form-group">
        <input
          onChange={(e) => handleNameChange(e)}
          placeholder="Full Name*"
          type="text"
          className="form-control"
          name="contact-name"
          required
        />
      </div>
      <div className="form-group">
        <input
          onChange={(e) => handleEmailChange(e)}
          placeholder="Your Email*"
          type="email"
          className="form-control"
          name="contact-email"
          required
        />
      </div>
      <div className="form-group">
        <input
          onChange={(e) => handleCompanyChange(e)}
          placeholder="Company*"
          type="text"
          className="form-control"
          name="contact-email"
          required
        />
      </div>
      <div className="form-group">
        <input
          onChange={(e) => handlePhoneChange(e)}
          placeholder="Phone*"
          type="tel"
          className="form-control"
          name="contact-phone"
          required
        />
      </div>
      <div className="form-group">
        <label>How soon do you want to start the project?*</label>
        <select className="form-control" name="contact-phone"
          onChange={(e) => setTime(e.target.value)}

        >

          <option value="withinEight">Within 8 weeks</option>
          <option value="moreThanEight">More than 8 weeks</option>
        </select>
      </div>
      <div className="form-group mb--40">

        <label>How can we help you?</label>
        <textarea
          onChange={(e) => handleDiscriptionChange(e)}
          placeholder="Describe your project to us*"
          className="form-control"
          name="contact-message"
          rows="4"
        ></textarea>
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
        >
          SUBMIT
        </button>
      </div>
      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
};

export default FormTouch;
