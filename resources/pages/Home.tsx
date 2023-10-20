import { Link } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';
import DefaultLayout from 'Components/Layout/DefaultLayout';

export default function Home({ courses }: { courses: Course[] }) {
  return (
    <DefaultLayout>
      <h1>Liste des cours</h1>
      <ul>
        {courses.length === 0 && (
          <li>
            <p>Aucun cours</p>
          </li>
        )}
        {courses.map(({ id, title, teacher }) => (
          <li key={id}>
            <Link href={`/courses/${id}`}>
              {title} ({teacher})
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/courses/create" className="btn">
        Ajouter un cours
      </Link>
    </DefaultLayout>
  );
}
