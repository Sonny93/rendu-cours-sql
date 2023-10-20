import { useForm } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';
import DefaultLayout from 'Components/Layout/DefaultLayout';

export default function EditCourse({ course }: { course: Course }) {
  const { delete: deleteFn } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (confirm('Êtes vous sûr de vouloir supprimer le cours' + course.title)) {
      deleteFn(`/api/courses/${course.id}`);
    }
  }

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit}>
        <p>Supprimer le cours</p>
        <p>{course.title}</p>
        <button
          type="submit"
          style={{
            color: '#fff',
            backgroundColor: 'salmon',
            padding: '.75em .5em',
            borderRadius: '5px',
            border: '1px solid salmon',
          }}
        >
          Supprimer
        </button>
      </form>
      <a href="/">un lien super joli pour revenir à l'accueil de ce merveilleux site</a>
    </DefaultLayout>
  );
}
