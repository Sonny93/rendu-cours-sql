import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import DefaultForm from 'Components/form/DefaultForm';

export default function CreateCourse() {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    // TODO: retrieve course id and redirect
    submit(Method.POST, '/api/courses', {
      onFinish: () => Inertia.get('/'),
    });
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
