// DebugWindow.jsx
import React from 'react';
import { useNavigationHistory } from '../hooks/useNavigationHistory';
import styles from '../styles/DebugWindow.module.css';

const DebugWindow = () => {
  const { history, clearHistory } = useNavigationHistory();

  return (
    <div className={styles.debugContainer}>
      <h3>Navigation History</h3>
      <ul className={styles.historyList}>
        {history.map((item, index) => (
          <li key={index} className={styles.historyItem}>
            {item.path} - {item.timestamp}
          </li>
        ))}
      </ul>
      <button onClick={clearHistory} className={styles.clearButton}>
        Clear History
      </button>
    </div>
  );
};

export default DebugWindow;