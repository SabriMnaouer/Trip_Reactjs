import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
<form className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" name="full-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>    </div>
  );
}

export default ContactForm;
