import "./styles/global.css";
import "./styles/draft.css";
import NavBar from "./NavBar";
import Robo from "../assets/Chatgptroboimg.png";

function Draft() {
  return (
    <>
      <NavBar></NavBar>

      <div className="d-flex vh-100">
        <div className="container w-50 d-flex flex-column justify-content-evenly draft-gap margin">
          <div className="draft-title">Email draft details</div>
          <div className="draft-sub-title">
            Fill the below details for AI to generate email.
          </div>
          <form
            action=""
            className="contact-form d-flex flex-column justify-content-evenly"
          >
            <div className="d-flex draft-gap-1">
              <div className="form-component w-50">
                <label htmlFor="" className="form-label">
                  Tone
                </label>
                <div className="dropdown">
                  <button
                    className="btn btn-white dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tone
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Request
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Formal
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Casual
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Respectful
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Approval
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-component w-50">
                <label htmlFor="" className="form-label">
                  Length
                </label>
                <div className="dropdown">
                  <button
                    className="btn btn-white dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Length
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Short
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Medium
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Long
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="form-floating w-100">
              <textarea
                className="form-control textbox w-100 h-100"
                placeholder="I invite you to visit our website and explore the potential of AI email generation. Join the growing number of professionals who have embraced this game-changing technology to transform their email communication. Take advantage of our free trial to experience the power of AI for yourself."
                id="floatingTextarea"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-white submitbutton align-self-center"
            >
              Generate
            </button>
          </form>
        </div>
        <div className="container bg-purple w-50 d-flex flex-column justify-content-evenly">
          <div className="d-flex justify-content-between">
            <div className="draft-subtitle text-white">
              Your generated Email appears here!
            </div>
            <div className="draft-subtitle text-white">No. of mails left : 20</div>
          </div>
          <div className="draft-subtitle text-white">
            Your generated email will appear here after you fill the details and
            click the generate button.
          </div>
          <div className="generatedemail d-flex align-items-center justify-content-center">
            <img className="roboimg"src={Robo} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="cont">
        <div className="left">
          <div className="fillinfo">
            <div className="lefthead"></div>
            <div className="leftsubtitle">
              
            </div>
            <div className="form">
              <form>
                <label className="inputbox width50">
                  Tone
                  <select className="dropdown" name="Tone" id="Tone">
                    <option value="Request" selected>
                      Request
                    </option>
                    <option value="Formal">Formal</option>
                    <option value="Casual">Casual</option>
                    <option value="Respectful">Respectful</option>
                    <option value="Approval">Approval</option>
                  </select>
                </label>
                <label className="inputbox width50">
                  Length
                  <select className="dropdown" name="Length" id="Length">
                    <option value="Short" selected>
                      Short
                    </option>
                    <option value="Medium">Medium</option>
                    <option value="Long">Long</option>
                  </select>
                </label>
                <label className="inputbox ">
                  Mail Draft
                  <textarea
                    className="textbox"
                    name="MailDraft"
                    id="MailDraft"
                    placeholder="I invite you to visit our website and explore the potential of AI email generation. Join the growing number of professionals who have embraced this game-changing technology to transform their email communication. Take advantage of our free trial to experience the power of AI for yourself.">
                    </textarea>
                </label>
                <input
                  className="submitbutton"
                  type="submit"
                  value="Generate"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="rightpart">
          <div className="flextext">
            <div className="righttitle">
          Your generated Email appears here!
          </div>
          <div className="rightsubtitle widthadj">
          No. of mails left : 20
          </div>
          </div>
          
          <div className="rightsubtitle">
          Your generated email will appear here after you fill the details and click the generate button.

          </div>
          <div className="generatedemail">
            <img className="roboimg"src={Robo} alt="" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Draft;
