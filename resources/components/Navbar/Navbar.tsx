import { Link } from '@inertiajs/inertia-react';
import './navbar.scss';

export default function Navbar() {
  const items = [
    { label: 'Home', link: '/' },
    { label: 'Courses', link: '/' },
    { label: 'Students', link: '/students' },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-items">
        {items.map(({ label, link }) => (
          <li className="nav-item" key={label}>
            <Link href={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
