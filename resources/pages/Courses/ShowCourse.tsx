import Course from 'App/Models/Course';
import DefaultLayout from 'Components/Layout/DefaultLayout';

export default function ShowCourse({ course }: { course: Course }) {
  return (
    <DefaultLayout>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>
        Cours dispensé par : <b>{course.teacher}</b>
      </p>
    </DefaultLayout>
  );
}
