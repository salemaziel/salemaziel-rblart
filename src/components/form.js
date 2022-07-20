import React from "react";
import PropTypes from "prop-types";

const Form = (props) => {
  return (
    <form
      className="contact-form"
      action="/thanks"
      name={props.formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={props.formName} />
      <div className="field half first">
        <label htmlFor="name">Name*</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email*</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
      </ul>
    </form>
  );
}

Form.propTypes = {
    formName: PropTypes.string,
}

export default Form;