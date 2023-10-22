import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import DefaultForm from 'Components/form/DefaultForm';

export default function EditCourse({ course }: { course: Course }) {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    if (confirm('Êtes vous sûr de vouloir supprimer le cours' + course.title)) {
      submit(Method.DELETE, `/api/courses/${course.id}`, {
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
