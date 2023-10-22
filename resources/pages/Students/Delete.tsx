import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import Student from 'App/Models/Student';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import DefaultForm from 'Components/form/DefaultForm';

export default function EditStudent({ student }: { student: Student }) {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    if (confirm("Êtes vous sûr de vouloir supprimer l'étudiant" + student.fullname)) {
      submit(Method.DELETE, `/api/students/${student.id}`, {
        onFinish: () => Inertia.get('/'),
      });
    }
  }

  return (
    <DefaultLayout>
      <DefaultForm title="Supprimer le post" onSubmit={handleSubmit} disableInputs>
        <button type="submit" className="danger">
          Supprimer
        </button>
      </DefaultForm>
    </DefaultLayout>
  );
}
