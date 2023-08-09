import "./styles/pricing.css";

function Pricing() {
  return (
    <section className="pricing" id="Pricing">
      <div className="head">
        Transparent Pricing for AI <br /> Email Generation
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-title">
            Demo <br />
            Free
          </div>
          <ul className="lst">
            <li>
              Our personal plan is designed for individual users who want to
              enhance their email writing efficiency.
            </li>
            <li>Mail count 130</li>
            <li>Valid up to 25 days</li>
          </ul>
          <button>
            <em className="btn subscribe">Subscribe</em>
          </button>
        </div>

        <div className="card bg-purple">
          <div className="card-title no-gap white-text">
            Pro Plan
            <em className="header2 header1 strike white-text">₹149/-</em>
          </div>
          <ul className="lst white-text">
            <li className="white-text">
              Get a taste of our AI email generation capabilities with our free
              demo plan.
            </li>
            <li className="white-text">Mail count 2</li>
            <li className="white-text">Valid till life time</li>
          </ul>
          <em className="header2 header1 white-text">
             ₹99/-
          </em>
          <button>
            <em className="btn subscribe white-background">Subscribe</em>
          </button>
        </div>
        <div className="card">
          <div className="card-title no-gap">
          Personal
          <em className="header1 strike">₹99/-</em>
          </div>
          <ul className="lst">
             <li>
               Take your email communication to the next level with our pro plan.
             </li>
             <li>Mail count 50</li>
             <li>Valid up to 25 days</li>
           </ul>
           <em className="header1">₹49/-</em>
          <button>
            <em className="btn subscribe">Subscribe</em>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
