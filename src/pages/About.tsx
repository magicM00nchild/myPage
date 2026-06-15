import Card from "../components/Card";
import {FaInstagram, FaTiktok, FaPen, FaShoppingBag, FaGift} from "react-icons/fa";
import { TbCards } from "react-icons/tb";


export default function About() {

  const differntLinks = [
    { title: "Amazon Wishlist", url: "https://www.amazon.de/hz/wishlist/ls/1XU2Z7R9AY8MT?ref_=wl_share", icon: <FaGift />},
    { title: "My Shop on ACGgoods", url: "https://acggoods.com/store/magicm00nchild", icon: <FaShoppingBag />},
    { title: "Skit suggestion form", url: "https://forms.gle/LgR13Va5MVaHTBka6", icon: <FaPen />},
    { title: "Ebay trading cards", url: "https://www.ebay.de/sch/i.html?item=127690029793&rt=nc&_trksid=p4429486.m3561.l161211&_ssn=starlight_13", icon: <TbCards />}

  ]

  const socialLinks = [
    { title: "Instagram", url: "https://www.instagram.com/magic_m00nchild/", icon: <FaInstagram /> },
    { title: "TikTok", url: "https://www.tiktok.com/@magic_m00nchild", icon: <FaTiktok /> },
  ];

  return (
    <section className="about">
      <h2>Might be interesting</h2>
      <div className="cards-container">
        {differntLinks.map((link) => (
          <Card key={link.title} title={link.title} url={link.url} icon={link.icon} />
        ))}
      </div>
      <h2>Find me on social media</h2>
      <div className="cards-container">
        {socialLinks.map((link) => (
          <Card key={link.title} title={link.title} url={link.url} icon={link.icon} />
        ))}
      </div>
    </section>
  );
}
