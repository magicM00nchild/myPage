import { useLocation } from "react-router-dom";
import "./Accepted.css";

export default function ValentineAccepted() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("q") ?? "my love";

  const displayName = name.length > 0 ?
  name.charAt(0).toUpperCase() + name.slice(1) : "My love";


  return (
    <div className="accepted-container">
      <h1 className="accepted-headline">
        {displayName}, you said YES 💘
      </h1>

      <div className="tiles-grid">
        <div className="tile">🌸 For you</div>
        <div className="tile">❤️ My love</div>
        <div className="tile">💌 A message</div>
        <div className="tile">📸 Us</div>
        <div className="tile">⏳ Our moment</div>
        <div className="tile">✨ One wish</div>
      </div>
    </div>
  );
}
