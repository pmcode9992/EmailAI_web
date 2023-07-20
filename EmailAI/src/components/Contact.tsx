import "./styles/contact.css";
function Contact() {
  return (
    <section>
      <div className="heading">
        Get in Touch with Our AI Email Generation Team
      </div>
      <div className="contactdets">
        <form>
          <label>
            Enter your name:
            <input type="text" />
          </label>
        </form>
      </div>
    </section>
  );
}

export default Contact;
