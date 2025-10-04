import React from "react"
import "./Contact.css"

interface ContactProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <div className="contact-label">Email</div>
                <a href="mailto:taivo.tokman@gmail.com" className="contact-value">
                  taivo.tokman@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <div className="contact-label">Phone</div>
                <a href="tel:+37256164505" className="contact-value">
                  +372 56164505
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <div className="contact-label">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/taivot"
                  className="contact-value"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/taivot
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌍</div>
              <div className="contact-details">
                <div className="contact-label">Location</div>
                <span className="contact-value">Enköping, 749 42</span>
              </div>
            </div>
          </div>
          <form
            className="contact-form"
            id="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            // onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" name="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input type="text" id="subject" name="subject" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full-width">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
