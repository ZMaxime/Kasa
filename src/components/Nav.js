import '../styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

    // Gestion du surlignage dans la navigation en fonction de la route actuelle

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className={location.pathname === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'}>   
          <Link to="/Kasa/">
            Accueil
          </Link>
        </li>
        <li className={location.pathname === '/About' ? 'nav_list_item_active' : 'nav_list_item'}>
          <Link to="/About">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}