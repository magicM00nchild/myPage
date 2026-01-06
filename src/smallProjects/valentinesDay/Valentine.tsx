import { useState } from "react";
import "./Valentine.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Valentine() {
  const [noClicks, setNoClicks] = useState(0);

    useEffect(() => {
    document.body.classList.add("valentine-page");

    return () => {
      document.body.classList.remove("valentine-page");
    };
  }, []);

  const noTexts = [
    "Are you sure?",
    "Really sure?",
    "Think about it again 🥺",
    "Last chance… 💔",
    "Ruuuuude! 😭",
  ];
  const startText = "Thats all I wish for on this day 👉🏻👈🏻"

  const navigate = useNavigate();
  const location = useLocation();

    const params = new URLSearchParams(location.search);
    const name = params.get("q");

    const handleYes = () => {
        navigate(`/valentine/accepted?q=${encodeURIComponent(name ?? "")}`);
    };

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1);
  };

  return (
    <div className="valentine-container">
      <img
        className="valentine-image"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjcwazRxeDlhdnNndGs3MHV1aXdtdnhoZ2pkeGk4bGM5a2N3bTNhOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1JmGiBtqTuehfYxuy9/giphy.gif"
        alt="Valentine"
      />

      <h1 className="valentine-headline">
        Do you wanna be my Valentine?
      </h1>

        <h2 className="valentine-subheadline">
          { noClicks > 0 ? noTexts[Math.min(noClicks - 1, noTexts.length - 1)] : startText }
        </h2>

      <div className="valentine-buttons">
        <button className="valentine-yes" onClick={handleYes}>
          Yes 💖
        </button>

        <button
          className="valentine-no"
          onClick={handleNoClick}
          style={{
            transform: `scale(${Math.max(1 - noClicks * 0.15, 0.4)})`,
          }}
        >
          No 💔
        </button>
      </div>
    </div>
  );
}
