import carLogo from '@assets/car-logo.svg'; // Import the image using the correct alias
import { AppRoutes } from '@enums/routes';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to={AppRoutes.HOME}>
        <img className={styles.logo} src={carLogo} alt="car-logo" />
      </Link>
    </header>
  );
};
