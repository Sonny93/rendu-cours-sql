import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import BasicForm from 'Components/form/BasicForm';

export default function DeleteCourse({ course }: { course: Course }) {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    if (confirm('Êtes vous sûr de vouloir supprimer le cours' + course.title)) {
      submit(Method.DELETE, `/api/courses/${course.id}`, {
        onFinish: () => Inertia.get('/'),
      });
    }
  }

  const fields = [
    {
      label: 'Titre',
      name: 'title',
      value: course.title,
    },
    {
      label: 'Description',
      name: 'description',
      value: course.description,
    },
    {
      label: 'Enseignant',
      name: 'teacher',
      value: course.teacher,
    },
  ];
  return (
    <DefaultLayout>
      <BasicForm title="Supprimer le cours" onSubmit={handleSubmit} fields={fields} disableInputs>
        <button type="submit" className="danger">
          Supprimer
        </button>
      </BasicForm>
    </DefaultLayout>
  );
}
