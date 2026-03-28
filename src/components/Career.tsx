const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Engineer</h4>
                <h5>Bettrlabs Pvt Ltd · Remote</h5>
              </div>
              <h3>2025–Now</h3>
            </div>
            <p>
              Migrated frontend from React.js to Next.js, improved SEO and
              performance, set up CI/CD pipelines, and built scalable reusable UI
              architecture for production deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Buzzart Software Pvt Ltd · Remote</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Built and optimized React Native apps with Redux and TypeScript,
              integrated WebSocket and Firebase for real-time features, deployed
              backend services on AWS, and improved app performance using caching.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Development</h4>
                <h5>Node.js · Express · MongoDB</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed scalable backend APIs with secure authentication, real-time
              integrations, and optimized performance to support large concurrent
              user workloads and reliable production operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>KNP College, RGPV University Bhopal</h5>
              </div>
              <h3>Education</h3>
            </div>
            <p>
              Academic foundation in engineering followed by hands-on product
              development across web and mobile platforms with a focus on modern
              frontend systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
