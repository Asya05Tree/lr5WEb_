/*useNavigationHistory*/
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export const useNavigationHistory = () => {
  const [history, setHistory] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setHistory(prev => [...prev, {
      path: location.pathname,
      timestamp: new Date().toLocaleTimeString()
    }]);
  }, [location]);
  const clearHistory = () => setHistory([]);
  return {
    history,
    navigate,
    clearHistory
  };
};
