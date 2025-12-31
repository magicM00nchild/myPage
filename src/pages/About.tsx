import Card from "../components/Card";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function About() {

  const socialLinks = [
    { title: "Instagram", url: "https://instagram.com/", icon: <FaInstagram /> },
    { title: "TikTok", url: "https://tiktok.com/", icon: <FaTiktok /> },
    { title: "LinkedIn", url: "https://linkedin.com/", icon: <FaLinkedin /> },
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
