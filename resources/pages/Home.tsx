import { Link } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';
import { useEffect, useState } from 'react';

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setCourses([]);
    fetch('/api/courses')
      .then((req) => req.json())
      .then((data) => setCourses(data?.courses || []))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <p>Chargement des données en cours</p>;
  }

  return (
    <div>
      <h1>it works</h1>
      <ul>
        {courses.length === 0 && (
          <li>
            <p>no course</p>
          </li>
        )}
        {courses.map(({ id, title, teacher }) => (
          <li key={id}>
            {title} ({teacher})
          </li>
        ))}
        <li>
          <Link href="/courses/create">Ajouter un cours</Link>
        </li>
      </ul>
    </div>
  );
}
