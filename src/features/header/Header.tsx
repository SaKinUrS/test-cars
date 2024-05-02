import { AppRoutes } from '@enums/routes';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to={AppRoutes.HOME}>
        <img
          className={styles.logo}
          src="/src/assets/car-logo.svg"
          alt="logo"
        />
      </Link>
    </header>
  );
};
