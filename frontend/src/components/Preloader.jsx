import { useState, useEffect } from 'react';

function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
}

export default Preloader;
