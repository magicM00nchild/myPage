import sword from "../assets/sword.PNG";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-image">
        <img src={sword} alt="a picture of a sword in a magical light" />
      </div>
      <div className="home-content">
        <div className="ger">
          <h2>Willkommen auf meiner Webseite</h2>
          <p>
            Diese ist aktuell im Aufbau. Schau bald wieder vorbei!
          </p>
        </div>
        <div className="eng">
          <h2>Welcome to my page</h2>
          <p>
            There is still work in progress. Please check back soon!
          </p>
        </div>

      </div>
    </section>
  );
}
