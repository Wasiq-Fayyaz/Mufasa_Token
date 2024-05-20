import "./tokenomics.css";
import logo from "../../Image/mufasa.png";
import tax from "../../Image/tax.png";
import supply from "../../Image/supply.png";
import ca from "../../Image/ca.png";

export default function Tokenomics() {
  return (
    <section className="tokenomics">
      <div className="section--heading">
        <h3>HIGHLIGHTS</h3>
        <p>TOKENOMICS</p>
      </div>

      <div className="card--container">
        <div className="tokenomics--card">
          <img src={logo} alt="picture of logo" className="token--mufasa"></img>
          <p>$MMT</p>
        </div>
        <div className="card--line"></div>
        <div className="tokenomics--card">
          <img
          src={tax}
          alt="404">
          </img>
          <p>
            Buy/Sell
            <br />
            5/5
          </p>
        </div>
        <div className="card--line"></div>
        <div className="tokenomics--card">
        <img
          src={supply}
          alt="404">
          </img>

          <p>
            Supply <br />
            1,000,000,000
          </p>
        </div>
        <div className="card--line"></div>
        <div className="tokenomics--card">
        <img
          src={ca}
          alt="404">
          </img>

          <p className="text-break">
            CA<br></br>Announcing Soon!
          </p>
        </div>
      </div>
    </section>
  );
}
