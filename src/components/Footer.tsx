export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">
        © {new Date().getFullYear()} Dorit
      </p>

      <nav className="footer__links">
        <a href="/impress">Impressum</a>
        <a href="/privacy">Datenschutz</a>
      </nav>
    </footer>
  );
}
