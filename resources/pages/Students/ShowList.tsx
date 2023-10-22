import { Link } from '@inertiajs/inertia-react';
import Student from 'App/Models/Student';
import DefaultLayout from 'Components/Layout/DefaultLayout';

export default function ShowListStudent({ students }: { students: Student[] }) {
  return (
    <DefaultLayout>
      <h1>Liste des étudiants</h1>
      <ul>
        {students.length === 0 && (
          <li>
            <p>Aucun étudiant</p>
          </li>
        )}
        {students.map(({ id, fullname }) => (
          <li key={id}>
            <Link href={`/students/${id}`}>{fullname}</Link>
          </li>
        ))}
      </ul>
      <Link href="/students/create" className="btn">
        Ajouter un étudiant
      </Link>
    </DefaultLayout>
  );
}
