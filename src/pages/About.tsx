import Card from "../components/Card";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function About() {

  const socialLinks = [
    { title: "Instagram", url: "https://www.instagram.com/magic_m00nchild/", icon: <FaInstagram /> },
    { title: "TikTok", url: "https://www.tiktok.com/@magic_m00nchild", icon: <FaTiktok /> },
  ];

  return (
    <section className="about">
      <h2>Find me on social media</h2>
      <div className="cards-container">
        {socialLinks.map((link) => (
          <Card key={link.title} title={link.title} url={link.url} icon={link.icon} />
        ))}
      </div>
    </section>
  );
}
