import React from "react";
import { contactData } from "@/data";
import Image from "next/image";


const Contact = () => {
  const { title, intro, contactInfo, footer } = contactData;

  return (
    <section id="contact" data-aos="fade-up">
      {/* Section Title */}
      <div className="section_title">
        {title.split(".")[0]}. <span>{title.split(". ")[1]}</span>
      </div>

      {/* Contact Layout */}
      <div className="contact_layout_container">
        {/* Mobile Active Section */}
        <div
          className="contact-mobile-active"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <span>{intro.heading}</span>
          <p>{intro.message}</p>
          <a href={`mailto:${intro.email}`} id="contact-email" className="btn">
            Say Hello
          </a>
        </div>

        {/* Contact Info Container */}
        <div className="contact-info-container" data-aos="fade-zoom-in">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="contact-info-card"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <Image
                src={info.icon}
                width={500}
                height={500}
                alt={`${info.type} Icon`}
              />
              {/* <img src={info.icon} alt={`${info.type} Icon`} /> */}
              <span>{info.type}</span>
              <span>{info.value}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        {/* Mobile Footer Icons */}
        <div className="mobile_footer_icons">
          <div>
            {footer.icons.map((icon, index) => (
              <a
                key={index}
                target="_blank"
                href={icon.link}
                rel="noopener noreferrer"
              >
                <img src={icon.icon} alt="Footer Icon" />
              </a>
            ))}
          </div>
        </div>
        {/* Footer Text */}
        <p>
          {footer.text.split(" ")[0]}{" "}
          <a
            href={footer.icons[0].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.text.split(" ")[2]}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
