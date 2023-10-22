import { Link } from '@inertiajs/inertia-react';
import Student from 'App/Models/Student';
import DefaultLayout from 'Components/Layout/DefaultLayout';

export default function ShowStudent({
  student,
  studentAverage: { average },
}: {
  student: Student;
  studentAverage: { average: number };
}) {
  return (
    <DefaultLayout>
      <h1>{student.fullname}</h1>
      <p>
        Email : <b>{student.email}</b>
      </p>
      <p>
        Note moyenne : <b>{average}</b>
      </p>
      <p>
        Date de naissance : <b>{student.birthday.toString()}</b>
      </p>
      <div style={{ display: 'flex', gap: '.5em', flexDirection: 'column' }}>
        <Link className="btn" href={`/students/${student.id}/edit`}>
          Modifier l'étudiant
        </Link>
        <Link className="btn" href={`/students/${student.id}/delete`}>
          Supprimer sans violence l'étudiant
        </Link>
      </div>
    </DefaultLayout>
  );
}
