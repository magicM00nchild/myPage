import Card from "../components/Card";

export default function About() {
  const socialLinks = [
    { title: "Instagram", url: "https://instagram.com/" },
    { title: "TikTok", url: "https://tiktok.com/" },
    { title: "LinkedIn", url: "https://linkedin.com/" },
  ];

  return (
    <section className="about">
      <h2>Finde mich auf Social Media</h2>
      <div className="cards-container">
        {socialLinks.map((link) => (
          <Card key={link.title} title={link.title} url={link.url} />
        ))}
      </div>
    </section>
  );
}
