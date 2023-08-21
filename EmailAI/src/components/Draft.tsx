import "./styles/global.css";
import "./styles/draft.css";
import NavBar from "./NavBar";
import Robo from "../assets/Chatgptroboimg.png";

import React, { useState, useSyncExternalStore } from "react";

function Draft() {
  const [mailleft, setMailLeft] = useState(20);
  const [mail, setMail] = useState("");
  const [size, setSize] = useState("medium"); // Default size
  const [tone, setTone] = useState(" professional"); // Default tone
  const [emotion, setEmotion] = useState(" neutral"); // Default emotion
  const [responseText, setResponseText] = useState("");
  let data = "";

  const sendRequest = async () => {
    if (mailleft > 0) {
      setMailLeft(mailleft - 1);
      try {
        const queryParams = new URLSearchParams({
          mail: mail,
          size: size,
          tone: tone,
          emotion: emotion,
        });

        const response = await fetch(
          `http://127.0.0.1:5000/mail?${queryParams}`
        );
        data = await response.text();
        setResponseText(data);
      } catch (error) {
        console.error("Error sending request:", error);
      }
    } else {
      setResponseText("Out of mails!!");
    }
    console.log(data);
    return data;
  };
  const HandleRequest = async () => {
    await sendRequest();
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="d-flex vh-100 flex-wrap w-100">
        <div className="container w-50 d-flex flex-column justify-content-evenly draft-gap margin m-0 draft-min-width draft-side">
          <div className="draft-title">Email draft details</div>
          <div className="draft-sub-title">
            Fill the below details for AI to generate email.
          </div>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex justify-content-evenly ">
              <div className="dd d-flex flex-column">
                <label htmlFor="Size">Size</label>
              <select
                className="dropdown"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              </div>
              <div className="dd d-flex flex-column">
                <label htmlFor="Tone">Tone</label>
              <select
                className="dropdown"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
              </select>
              </div>
              <div className="dd d-flex flex-column ">
                <label htmlFor="Emotion">Emotion</label>
              <select
                className="dropdown"
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}
              >
                <option value="neutral">Neutral</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
              </select>
              </div>
            </div>
            <div className="form-floating w-100">
              <textarea
                className="form-control textbox w-100 h-100"
                placeholder="I invite you to visit our website and explore the potential of AI email generation. Join the growing number of professionals who have embraced this game-changing technology to transform their email communication. Take advantage of our free trial to experience the power of AI for yourself."
                id="floatingTextarea"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              ></textarea>
            </div>
            <button
              onClick={HandleRequest}
              type="submit"
              className="btn btn-purple submitbutton align-self-center"
            >
              Generate Email
            </button>
          </div>
        </div>
        <div className="container bg-purple w-50 d-flex flex-column justify-content-evenly m-0 draft-min-width draft-side">
          <div className="d-flex justify-content-between">
            <div className="draft-subtitle text-white">
              Your generated Email appears here!
            </div>
            <div className="draft-subtitle text-white">
              No. of mails left : {mailleft}
            </div>
          </div>
          <div className="draft-subtitle text-white">
            Your generated email will appear here after you fill the details and
            click the generate button.
          </div>
          <div className="generatedemail d-flex justify-content-between p-4 flex-column gap-5">
            <>
            <textarea className="generatedemail" defaultValue={responseText} onChange={(e) => setResponseText(e.target.value)} />
            <div className="d-flex justify-content-evenly">
              <button
                className="btn bg-white text-black submitbutton align-self-center"
                onClick={HandleRequest}
              >
                Regenerate
              </button>
              <button
                className="btn bg-white text-black submitbutton align-self-center"
                onClick={() => {navigator.clipboard.writeText(responseText)}}
              >
                Copy Text
              </button>
            </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Draft;
