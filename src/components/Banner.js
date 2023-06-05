import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Banner.css';

export default function Banner() {
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    setIsAboutPage(location.pathname === '/About');
  }, [location]);

  // Gestion de ce qui doit être rendu à l'écran en fonction de la route dans laquelle on se trouve

  return (
    <section className={isAboutPage ? 'banner_about' : 'banner'}>
      {!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
    </section>
  );
}