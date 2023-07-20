import "../components/styles/about.css";
import people from "../assets/people.svg";
import email from "../assets/email.svg";
import hands from "../assets/hands.svg";
function About() {
  return (
    <section className="about">
      <div className="t1">
        <em className="head">Introducing Our AI Email Generation Solution</em>
        <em className="subhead">Intelligent Email Composition</em>
        <div className="cards">
          <div className="card1">
            <div className="card1head">
              <img src={people} alt="" />
              <em>Effort Less Communication</em>
            </div>
            <em className="card1sub">
              Revolutionize Your Email Experience with AI-Powered Email
              Generation
            </em>
          </div>
          <div className="card2">
            <div className="card2head">
              <img src={email} alt="" /> <div className="shadow"></div>
              <em>Streamline Your Inbox</em>
            </div>
            <em className="card2sub">
              Enhance Efficiency and Productivity with AI-Driven Email
              Generation
            </em>
          </div>

          <div className="card3">
            <div className="card3head">
              <img src={hands} alt="" /> <div className="shadow"></div>
              <em>Introducing the Future of Email</em>
            </div>
            <em className="card3sub">
              Empower Your Communication with AI-Generated Emails
            </em>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
