import { Method } from '@inertiajs/inertia';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import DefaultForm from 'Components/form/DefaultForm';

export default function CreateCourse() {
  function handleSubmit(submit) {
    submit(Method.POST, '/api/courses');
  }
  return (
    <DefaultLayout>
      <DefaultForm title="Créer un cours" onSubmit={handleSubmit}>
        <button type="submit">Créer</button>
      </DefaultForm>
      <a href="/">un lien super joli pour revenir à l'accueil de ce merveilleux site</a>
    </DefaultLayout>
  );
}
