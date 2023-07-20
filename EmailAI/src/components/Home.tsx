import "../components/styles/home.css";
import "../components/styles/navbar.css";
import roboimg from "../assets/Chatgptroboimg.png";
import glogo from "../assets/googlelogo.svg";
function Home() {
  return (
    <section>
      <div className="frame1">
        <div className="text">
          <em className="head">
            Experience the future of email writing with{" "}
            <em className="aitech">AI technology</em>.
          </em>
          <em className="subtitle">
            Save time and boost your response rate with AI-generated emails that
            get results.
          </em>
          <em className="gloginbutton">
            <img src={glogo} alt="" />
            Login with google
          </em>
        </div>

        <div>
          <img className="roboimage" src={roboimg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
