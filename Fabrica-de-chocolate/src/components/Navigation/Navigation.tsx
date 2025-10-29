import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

// ESTA LISTA AGORA SÓ TEM OS ITENS DO DASHBOARD
const navItems = [
  { path: '/temperatura', label: 'Temperatura' },
  { path: '/lubrificacao', label: 'Lubrificação' },
  { path: '/previsao-falha', label: 'Previsão de falha' },
  { path: '/proxima-manutencao', label: 'Próxima manutenção' },
  { path: '/automacao', label: 'Automação' },
];

export default function Navigation() {
  return (
    <nav className={styles.navContainer}>
      <h2 className={styles.title}>Dashboard</h2>
      <ul className={styles.navList}>
        {navItems.map(item => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              » {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}