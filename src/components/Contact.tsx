import React from "react";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up">
      {/* Section Title */}
      <div className="section_title">
        05. <span>Contact</span>
      </div>

      {/* Contact Layout */}
      <div className="contact_layout_container">
        {/* Mobile Active Section */}
        <div
          className="contact-mobile-active"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <span>Get in Touch</span>
          <p>
            I'm looking for new opportunities, my inbox is always open. Whether
            you have a question or just want to say hi, I’ll be so happy to
            connect with you!
          </p>
          <a
            href="mailto:sm.sahilmalviya@gmail.com"
            id="contact-email"
            className="btn"
          >
            Say Hello
          </a>
        </div>

        {/* Contact Info Container */}
        <div className="contact-info-container" data-aos="fade-zoom-in">
          {/* Call Me */}
          <a
            href="tel:+917987183876"
            className="contact-info-card"
            data-aos="fade-right"
          >
            <img src="/icon/phone-call.svg" alt="Phone Icon" />
            <span>Call Me</span>
            <span>+91 7987183876</span>
          </a>

          {/* Mail Me */}
          <a
            href="mailto:sm.sahilmalviya@gmail.com"
            className="contact-info-card"
            data-aos="fade-right"
          >
            <img src="/icon/mail.svg" alt="Mail Icon" />
            <span>Mail Me</span>
            <span>sm.sahilmalviya@gmail.com</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sahil18718"
            className="contact-info-card"
            data-aos="fade-left"
          >
            <img src="/icon/github.svg" alt="GitHub Icon" />
            <span>GitHub</span>
            <span>Sahil18718</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sahilmalviya18718/"
            className="contact-info-card"
            data-aos="fade-left"
          >
            <img src="/icon/linkedin.svg" alt="LinkedIn Icon" />
            <span>Ping Me</span>
            <span>Sahil Malviya</span>
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        {/* Mobile Footer Icons */}
        <div className="mobile_footer_icons">
          <div>
            <a
              target="_blank"
              href="https://github.com/Sahil18718"
              rel="noopener noreferrer"
            >
              <img src="/icon/github.svg" alt="GitHub Icon" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/Sahilmalviya18718/"
              rel="noopener noreferrer"
            >
              <img src="/icon/linkedin.svg" alt="LinkedIn Icon" />
            </a>
            <a
              target="_blank"
              href="tel:+917987183876"
              rel="noopener noreferrer"
            >
              <img src="/icon/phone-call.svg" alt="Phone Icon" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/AnshitaGup4530"
              rel="noopener noreferrer"
            >
              <img src="/icon/twitter.svg" alt="Twitter Icon" />
            </a>
            <a
              target="_blank"
              href="mailto:sm.sahilmalviya@gmail.com"
              rel="noopener noreferrer"
            >
              <img src="/icon/mail.svg" alt="Mail Icon" />
            </a>
          </div>
        </div>
        {/* Footer Text */}
        <p>
          designed by{" "}
          <a
            href="https://github.com/Sahil18718"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sahil Malviya
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;