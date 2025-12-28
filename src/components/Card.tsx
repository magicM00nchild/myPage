interface CardProps {
  title: string;
  url: string;
  icon?: React.ReactNode; // optional, z.B. SVG Icon
}

export default function Card({ title, url, icon }: CardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3>{title}</h3>
    </a>
  );
}
