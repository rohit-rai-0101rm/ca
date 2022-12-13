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

const GetstartedForm = () => {

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
        <center>
     <form ref={form} onSubmit={sendEmail} className="axil-contact-form col-lg-6 mt--60 mb--30">
        <div className="form-group">
            <input placeholder="Enter Talent Role*" type="text" className="form-control infoPlaceholder" name="contact-name" required />
        </div>
        <div className="form-group">
            <select className="form-control" name="contact-phone">
            <option value="volvo">Select Seniority Level*</option>
            <option value="saab">Junior (1-3exp. years)</option>
            <option value="saab">Mid (3-5exp. years)</option>
            <option value="saab">Senior (5-8exp. years)</option>
       
        </select>
        </div>
        <div className="form-group">
            <input  placeholder="Attach the JD*" type="tel" className="form-control infoPlaceholder" name="contact-phone" required />
        </div>
        <div className="form-group">
            <input placeholder="Share Your Work Email*" type="email" className="form-control infoPlaceholder" name="contact-email" required />
        </div>
        <div className="form-group">
            <input placeholder="Your Name*" type="email" className="form-control infoPlaceholder" name="contact-email" required />
        </div>
        <div className="form-group">
            <input placeholder="Phone*" type="email" className="form-control infoPlaceholder" name="contact-email" required />
        </div>
    
        <div className="form-group mb--40">
            <input placeholder="Brief*"  className="form-control infoPlaceholder" name="contact-message" rows="4"></input>
            
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Start with Few Questions</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
        </center>
   
    )
}

export default GetstartedForm;