import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
        Your Message has been successfully sent.
        </Alert>
    )
}

const FormTwo = () => {

    const form = useRef();

    const [ result, showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yj5dgzp', 'template_hfduayo', form.current, 'WLENsTkBytC0yvItS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <input placeholder="Name*" type="text" className="form-control" name="contact-name" required />
        </div>
        <div className="form-group">
            <input placeholder="Work Email*" type="email" className="form-control" name="contact-email" required />
        </div>
        <div className="form-group">
            <input  placeholder="Phone*" type="tel" className="form-control" name="contact-phone" required />
        </div>
        <div className="form-group">
            <label>How soon do you want to start the project?*</label>
            <select className="form-control" name="contact-phone">
            <option value="volvo">Within 8 weeks</option>
            <option value="saab">More than 8 weeks</option>
       
        </select>
        </div>
        <div className="form-group mb--40">
            <input placeholder="Share Your Requirements*"  className="form-control" name="contact-message" rows="4"></input>
            
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">SUBMIT</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormTwo;