import { MdArrowOutward, MdCopyright } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:sm.sahilmalviya@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — sm.sahilmalviya@gmail.com
              </a>
            </p>
            <p>Phone — +91-7987183876</p>
            <h4>Education</h4>
            <p>
              B.Tech, KNP College of Science &amp; Technology, RGPV University
              Bhopal
            </p>
            <p>
              Diploma in Engineering, Govt. Polytechnic College, RGPV University
              Bhopal
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="http://sahil1878.github.io/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sahilmalviya/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com/sahil1878"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sahil Malviya</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
