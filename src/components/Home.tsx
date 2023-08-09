import "../components/styles/home.css";
import "../components/styles/navbar.css";
import roboimg from "../assets/Chatgptroboimg.png";
import glogo from "../assets/googlelogo.svg";
function Home() {
  return (
    <section className="home" id="Home">
      <div className="container text-center">
        <div className="row home-row">
          <div className="col-7 l">
            <div className="text">
              <em className="headertitle">
                Experience the future of email writing with{" "}
                <em className="aitech">AI technology</em>.
              </em>
              <em className="headersubtitle">
                Save time and boost your response rate with AI-generated emails
                that get results.
              </em>
              <em className="btn gloginbutton">
                <img src={glogo} alt="Roboimg" />
                Login with google
              </em>
            </div>
          </div>
          <div className="col-5 r">
            <div className="image-container">
              <img className="roboimage" src={roboimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
