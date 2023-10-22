import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import BasicForm from 'Components/form/BasicForm';

export default function CreateCourse() {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    // TODO: retrieve course id and redirect
    submit(Method.POST, '/api/students', {
      onFinish: () => Inertia.get('/'),
    });
  }

  const fields = [
    {
      label: 'Prénom',
      name: 'firstname',
    },
    {
      label: 'Nom',
      name: 'name',
    },
    {
      label: 'Email',
      name: 'email',
    },
    {
      label: 'Date de naissance',
      name: 'birthday',
      type: 'date',
      value: new Date().toString(),
    },
  ];
  return (
    <DefaultLayout>
      <BasicForm title="Créer un étudiant" onSubmit={handleSubmit} fields={fields}>
        <button type="submit">Créer</button>
      </BasicForm>
    </DefaultLayout>
  );
}
