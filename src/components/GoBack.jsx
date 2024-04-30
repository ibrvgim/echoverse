import { useNavigate } from 'react-router-dom';
import styles from '../styles/GoBack.module.css';

function GoBack() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default GoBack;
