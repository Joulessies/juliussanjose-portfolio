import Link from 'next/link';
import '../styles/navigationbar.scss';

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p className="logo-text">Julius San Jose</p>
      </div>

      <ul className="navbar-links">
        <li className="navbar-item">
          <Link className="navbar-link" href="/home">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" href="/works">
            Works
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" href="/about">
            About
          </Link>
        </li>
        <li className="navbar-item">
          <a
            className="navbar-link"
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </li>
      </ul>
    </nav>
  );
}
