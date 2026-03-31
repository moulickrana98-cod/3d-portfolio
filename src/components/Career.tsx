import "./styles/Career.css";

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
                <h4>Laravel Developer</h4>
                <h5>Silver Touch Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributing to enterprise-grade web application development using
              Laravel and PHP. Designing and optimizing MySQL database schemas,
              building RESTful APIs, and collaborating with cross-functional teams
              to deliver high-quality software on schedule.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Laravel Developer</h4>
                <h5>Yudiz Solution Ltd.</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Developed and integrated APIs with real-time socket communication.
              Built a wallet application with Stripe and multiple payment gateways.
              Implemented Firebase FCM for push notifications, worked on map
              integrations for a dating application, and took on Project Lead
              responsibilities — managing tasks, timelines, and team coordination.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Laravel Developer</h4>
                <h5>WebCodeGenie Technology Pvt. Ltd.</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Developed and maintained web applications using the Laravel
              framework. Collaborated with design and product teams, optimized
              performance through code refactoring and database optimization, and
              participated in Agile sprints including stand-ups and retrospectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
