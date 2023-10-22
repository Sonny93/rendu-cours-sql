import { Link } from '@inertiajs/inertia-react';
import Navbar from 'Components/Navbar/Navbar';
import { ReactNode } from 'react';

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const currentPath = window.location.pathname;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {currentPath !== '/' && (
        <Link href="/">un lien super joli pour revenir à l'accueil de ce merveilleux site</Link>
      )}
    </>
  );
}
