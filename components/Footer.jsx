/*Footer.jsx*/ 
import React, { useEffect, useRef } from 'react';
import FragileFantasy from './Music/FragileFantasy.mp3';

function Footer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; 
    }
  }, []);

  return (
    <footer className="footer">
      <audio ref={audioRef} autoPlay loop>
        <source src={FragileFantasy} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>&copy; 2024 - Зоомагазин "ВусоЛапоХвіст". Всі права не захищені.</p>
    </footer>
  );
}

export default Footer;
