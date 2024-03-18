import React from 'react';
import Logo from './assets/img/itulogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faTasks } from '@fortawesome/free-solid-svg-icons';

// Définie un composant SidebarItem pour représenter chaque élément de la barre latérale
const SidebarItem = ({ icon, text }) => {
  return (
    <li>
      <a href="#">
        <FontAwesomeIcon icon={icon}/>  
        <span className="nav-item">{text}</span>
      </a>
    </li>
  );
};

// Définie le composant Sidebar qui contient tous les éléments de la barre latérale
const Sidebar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="" />
          <h1>G-Class</h1>
        </div>
        <ul>
          {/* Utilisation du composant SidebarItem pour chaque élément de la barre latérale */}
          <SidebarItem icon={faHome} text="Accueil" />
          <SidebarItem icon={faChartBar} text="Suivis" />
          <SidebarItem icon={faTasks} text="Listes" />
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
