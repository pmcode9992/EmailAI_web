import "../components/styles/about.css";
import people from "../assets/people.svg";
import email from "../assets/email.svg";
import hands from "../assets/hands.svg";
function About() {
  return (
    <section className="about" id="About">
      <div className="row about titlesub">
        <em className="head">Introducing Our AI Email Generation Solution</em>
        <em className="subhead">Intelligent Email Composition</em>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-title">
            <img src={people} alt="" />
            <em>Effort Less Communication</em>
          </div>
          <em className="card-subtitle">
            Revolutionize Your Email Experience with AI-Powered Email Generation
          </em>
        </div>
        <div className="card">
          <div className="card-title">
            <img src={email} alt="" />
            <em>Streamline Your Inbox</em>
          </div>
          <em className="card-subtitle">
            Enhance Efficiency and Productivity with AI-Driven Email Generation{" "}
          </em>
        </div>
        <div className="card">
          <div className="card-title">
          <img src={hands} alt="" />
            <em>Introducing the Future of Email</em>
          </div>
          <em className="card-subtitle">
          Empower Your Communication with AI-Generated Emails
          </em>
        </div>
        
      </div>
    </section>
  );
}

export default About;
