import "./styles/contact.css";
function Contact() {
  return (
    <section className="contact" id="Contact">
      <div className="head">Get in Touch with Our AI Email Generation Team</div>
      <form action="" className="contact-form">
        <div className="row">
          <div className="col mx-5 my-5">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control contactbox"
              id="Name"
              aria-describedby="Name"
              placeholder="Ajith Kumar"
            />
          </div>
          <div className="col mx-5 my-5">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control contactbox"
              id="Email"
              aria-describedby="Email"
              placeholder="ajithkumar@gmail.com"
            />
          </div>
        </div>
        <div className="row">
          <div className="col mx-5 my-5">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control contactbox"
              id="Phone"
              aria-describedby="Phone"
              placeholder="9842100220"
            />
          </div>
          <div className="col mx-5 my-5">
            <label className="form-label">District</label>
            <input
              type="text"
              className="form-control contactbox"
              id="District"
              aria-describedby="District"
              placeholder="Vellore"
            />
          </div>
        </div>
        <div className="col m-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-white submitbutton">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
