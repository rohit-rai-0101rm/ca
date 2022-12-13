import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

const Result = () => {
  return (
    <Alert variant="success" className="success-msg">
      Your Message has been successfully sent.
    </Alert>
  );
};

const FormGraphics = () => {
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

  return (
    <div className="form-Resizing">
      <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group ">
          <input
            placeholder="Name*"
            type="text"
            className="form-control infoPlaceholder "
            name="contact-name"
            required
          />
        </div>
        <div className="form-group ">
          <input
            placeholder="Work Email*"
            type="email"
            className="form-control infoPlaceholder"
            name="contact-email"
            required
          />
        </div>
        <div className="form-group ">
          <input
            placeholder="Phone*"
            type="tel"
            className="form-control infoPlaceholder"
            name="contact-phone"
            required
          />
        </div>
        <label class="container">
          GEN
          <input              className="form-control infoPlaceholder"
 type="radio" name="radio" checked />
          <span class="check"></span>
        </label>
        <label class="container">
          OBC
          <input             className="form-control infoPlaceholder"
 type="radio" name="radio" />
          <span class="check"></span>
        </label>

        <div className="form-group ">
          <label>How soon do you want to start the project?*</label>
          <select className="form-control" name="contact-phone">
            <option value="volvo">Display Banners</option>
            <option value="saab">Email Template</option>
            <option value="saab">Logo Design</option>
            <option value="saab">Corporate Assets</option>
            <option value="saab">Others</option>
          </select>
        </div>
        <div className="form-group mb--40">
          <input
            placeholder="Share Your Requirements*"
            className="form-control infoPlaceholder"
            name="contact-message"
            rows="4"
          ></input>
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
    </div>
  );
};

export default FormGraphics;
