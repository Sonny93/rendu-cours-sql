import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import Student from 'App/Models/Student';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import BasicForm from 'Components/form/BasicForm';

export default function EditStudent({ student }: { student: Student }) {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    if (confirm("Êtes vous sûr de vouloir supprimer l'étudiant" + student.fullname)) {
      submit(Method.DELETE, `/api/students/${student.id}`, {
        onFinish: () => Inertia.get('/'),
      });
    }
  }

  const fields = [
    {
      label: 'Prénom',
      name: 'firstname',
      value: student.firstname,
    },
    {
      label: 'Nom',
      name: 'name',
      value: student.name,
    },
    {
      label: 'Email',
      name: 'email',
      value: student.email,
    },
    {
      label: 'Date de naissance',
      name: 'birthday',
      type: 'date',
      value: student.birthday.toString(),
    },
  ];
  return (
    <DefaultLayout>
      <BasicForm
        title="Supprimer l'étudiant 👼"
        onSubmit={handleSubmit}
        fields={fields}
        disableInputs
      >
        <button type="submit" className="danger">
          Supprimer
        </button>
      </BasicForm>
    </DefaultLayout>
  );
}
