import sword from "../assets/sword.PNG";
import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="home">
      <div className="home-image" >
        {!loaded && (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.05)",
              borderRadius: "8px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        )}
        <img
          src={sword}
          alt="a picture of a sword in a magical light"
          onLoad={() => setLoaded(true)}
        />
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
