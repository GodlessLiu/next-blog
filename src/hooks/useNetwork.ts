import { useState, useEffect } from 'react';
export const useNetwork = ({ pollingInterval = 60 * 1000 }: { pollingInterval?: number }) => {
  const [downlink, setDownlink] = useState(0);
  const [effectiveType, setEffectiveType] = useState('');
  const [rtt, setRtt] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // @ts-ignore
    const connection = window.navigator.connection;
    if (!connection) {
      setIsVisible(false);
      return;
    }
    setDownlink(connection.downlink);
    setEffectiveType(connection.effectiveType);
    setRtt(connection.rtt);
    const timer = setInterval(() => {
      setDownlink(connection.downlink || 2);
      setEffectiveType(connection.effectiveType || '4g');
      setRtt(connection.rtt || 150);
    }, pollingInterval);
    return () => clearInterval(timer);
  }, [pollingInterval]);

  return {
    downlink,
    effectiveType,
    rtt,
    isVisible,
  };
};
