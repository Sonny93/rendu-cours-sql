import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import BasicForm from 'Components/form/BasicForm';

export default function CreateCourse() {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    // TODO: retrieve course id and redirect
    submit(Method.POST, '/api/courses', {
      onFinish: () => Inertia.get('/'),
    });
  }

  const fields = [
    {
      label: 'Titre',
      name: 'title',
    },
    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Enseignant',
      name: 'teacher',
    },
  ];
  return (
    <DefaultLayout>
      <BasicForm title="Créer un cours" onSubmit={handleSubmit} fields={fields}>
        <button type="submit">Créer</button>
      </BasicForm>
    </DefaultLayout>
  );
}
