import { Method } from '@inertiajs/inertia';
import DefaultForm from 'Components/form/DefaultForm';

export default function CreateCourse() {
  function handleSubmit(submit) {
    submit(Method.POST, '/api/courses');
  }
  return (
    <div>
      <DefaultForm title="Créer un cours" onSubmit={handleSubmit}>
        <button type="submit">Créer</button>
      </DefaultForm>
      <a href="/">un lien super joli pour revenir à l'accueil de ce merveilleux site</a>
    </div>
  );
}
