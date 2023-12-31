import { Link } from 'react-router-dom';
import './css/Header.css';

export default function Header() {
  return (
    <header>
      <div id="header__logo">
        <h1 className="text-style-3">Bookstore CMS</h1>
      </div>
      <nav id="navbar">
        <ul id="navbar__list">
          <li className="navbar__item--active text-style-6">
            <Link to="/">Books</Link>
          </li>
          <li className="navbar__item--inactive text-style-6">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <div id="navbar__avatar"></div>
      </nav>
    </header>
  );
}
