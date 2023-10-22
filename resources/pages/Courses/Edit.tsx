import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import BasicForm from 'Components/form/BasicForm';

export default function EditCourse({ course }: { course: Course }) {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    submit(Method.PUT, `/api/courses/${course.id}`, {
      onFinish: () => Inertia.get(`/courses/${course.id}`),
    });
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
      <BasicForm title="Modifier un cours" onSubmit={handleSubmit} fields={fields}>
        <button type="submit">Modifier le cours</button>
      </BasicForm>
    </DefaultLayout>
  );
}
