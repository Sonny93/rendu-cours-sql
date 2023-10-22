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
      <p>Note moyenne : {average ? <b>{average}</b> : <i>N/A</i>}</p>
      <p>
        Date de naissance : <b>{student.birthday.toString()}</b>
      </p>
      <p>Cours : {student.courses.length === 0 && 'Aucun'}</p>
      <ul style={{ paddingLeft: '1em' }}>
        {student.courses.map(({ id, title, teacher }) => (
          <li key={id}>
            <Link href={`/courses/${id}`}>
              {title} ({teacher})
            </Link>
          </li>
        ))}
      </ul>
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
