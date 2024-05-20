import "./about.css";
import mufasa_1 from "../../Image/about_mufasa_1.png";
import mufasa_2 from "../../Image/about_mufasa_2.png";
import mufasa_3 from "../../Image/about_mufasa_3.png";

export default function About() {
  return (
    <section className="about">
      <div className="section--heading">
        <h3>HIGHLIGHTS</h3>
        <p>ABOUT MUFASA MEME TOKEN</p>
      </div>

      <div className="about--2">
        <div>
          <h2>MUFASA JOINS CRYPTOVERSE</h2>
          <p>
            Step into the digital savannah with Mufasa Token! Inspired by "The
            Lion King" and the upcoming movie, this meme token is set to roar
            onto the crypto scene. Join us on an epic adventure where every
            investor becomes part of the Pride Lands. Celebrate leadership,
            courage, and the circle of life as we await the new Lion King movie.
            Mufasa Token promises excitement and action, just like the trailer
            for the new movie. Embrace the journey and witness the rise of a new
            king in the crypto jungle <br /> <br /> Join the digital savannah
            with Mufasa Token on Crypto Base Chain, where innovation meets
            opportunity. Enjoy lightning-fast transactions, low fees, and
            top-notch security. Whether you're an experienced investor or new to
            crypto, Mufasa Token is your gateway to decentralized finance.{" "}
            <br /> <br /> Embrace the Circle of Life: Unite with a diverse
            community celebrating unity and environmental sustainability. Mufasa
            Token supports wildlife conservation, making your investment
            meaningful.Don’t Miss Out: The roar of Mufasa Token is growing!
            Secure your place in the pride and embark on a unique journey. With
            Mufasa Token, the sky's the limit in decentralized finance. Join us today and unleash your inner lion! Mufasa Token:
            Where the crypto jungle meets the circle of life.
          </p>

          <div className="button--container">
            <a
              href="https://t.me/MufasaBase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button--gradient">Join Us</button>
            </a>
          </div>
        </div>
        <p></p>

        <div className="about--img--container">
          <img src={mufasa_2} alt="404" className="about--img"/>
        </div>
      </div>
    </section>
  );
}
