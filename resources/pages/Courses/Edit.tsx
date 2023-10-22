import { Inertia, Method } from '@inertiajs/inertia';
import { InertiaFormProps } from '@inertiajs/inertia-react';
import Course from 'App/Models/Course';
import DefaultLayout from 'Components/Layout/DefaultLayout';
import DefaultForm from 'Components/form/DefaultForm';

export default function EditCourse({ course }: { course: Course }) {
  function handleSubmit(submit: InertiaFormProps['submit']) {
    submit(Method.PUT, `/api/courses/${course.id}`, {
      onFinish: () => Inertia.get(`/courses/${course.id}`),
    });
  }
  return (
    <DefaultLayout>
      <DefaultForm
        title="Modifier un post"
        onSubmit={handleSubmit}
        defaultData={{
          title: course.title,
          description: course.description,
          teacher: course.teacher,
        }}
      >
        <button type="submit">Modifier le cours</button>
      </DefaultForm>
    </DefaultLayout>
  );
}
