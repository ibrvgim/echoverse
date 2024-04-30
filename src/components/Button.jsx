import { useNavigate } from 'react-router-dom';
import styles from '../styles/Button.module.css';

function Button({ children, style = '', path, handleOnClick }) {
  const navigate = useNavigate();

  if (path) {
    return (
      <button
        className={`${styles.button} ${styles[style]}`}
        onClick={() => navigate(path)}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${styles.button} ${styles[style]}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}

export default Button;
