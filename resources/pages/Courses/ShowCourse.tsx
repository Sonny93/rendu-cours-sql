import { Link } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';
import DefaultLayout from 'Components/Layout/DefaultLayout';

export default function ShowCourse({ course }: { course: Course }) {
  return (
    <DefaultLayout>
      <h1>{course.title}</h1>
      <p>
        Description : <b>{course.description}</b>
      </p>
      <p>
        Cours dispensé par : <b>{course.teacher}</b>
      </p>
      <p>Students :</p>
      <ul style={{ paddingLeft: '1em' }}>
        {course.students.map(({ id, fullname }) => (
          <li key={id}>
            <Link href={`/students/${id}`}>{fullname}</Link>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: '.5em', flexDirection: 'column' }}>
        <Link className="btn" href={`/courses/${course.id}/edit`}>
          Modifier le cours
        </Link>
        <Link className="btn" href={`/courses/${course.id}/delete`}>
          Supprimer le cours
        </Link>
      </div>
    </DefaultLayout>
  );
}
