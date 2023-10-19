import { useForm } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';

export default function EditCourse({ course }: { course: Course }) {
  const { delete: deleteFn } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (confirm('Êtes vous sûr de vouloir supprimer le cours' + course.titre)) {
      deleteFn(`/api/courses/${course.id}`);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Supprimer le cours</p>
        <p>{course.titre}</p>
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
    </div>
  );
}
