import Route from '@ioc:Adonis/Core/Route';
import AutoSwagger from 'adonis-autoswagger';
import swagger from 'Config/swagger';

Route.get('/', 'CourseController.index');

Route.group(() => {
  Route.get('/create', 'CourseController.showCreate');
  Route.get('/:courseId', 'CourseController.showCourse');
  Route.get('/:courseId/edit', 'CourseController.showEdit');
  Route.get('/:courseId/delete', 'CourseController.showDelete');
}).prefix('/courses');

Route.group(() => {
  Route.get('/', 'StudentController.index');
  Route.get('/create', 'StudentController.showCreate');
  Route.get('/:studentId', 'StudentController.showStudent');
  Route.get('/:studentId/edit', 'StudentController.showEdit');
  Route.get('/:studentId/delete', 'StudentController.showDelete');
}).prefix('/students');

Route.get('/docs', async () => AutoSwagger.docs(Route.toJSON(), swagger));
Route.get('/swagger', async () => AutoSwagger.ui('/docs'));

Route.group(() => {
  Route.get('/hello', () => 'world!');

  Route.group(() => {
    Route.get('/', 'CourseController.handleGetAllCourses');
    Route.get('/:courseId', 'CourseController.handleGetCourse');

    Route.post('/', 'CourseController.handleCreateCourse');
    Route.put('/:courseId', 'CourseController.handleEditCours');
    Route.delete('/:courseId', 'CourseController.handleDeleteCours');
  }).prefix('/courses');

  Route.group(() => {
    Route.get('/', 'StudentController.handleGetAllStudents');
    Route.post('/', 'StudentController.handleCreateStudent');

    Route.get('/:studentId', 'StudentController.handleGetStudent');
    Route.put('/:studentId', 'StudentController.handleEditStudent');
    Route.delete('/:studentId', 'StudentController.handleDeleteStudent');
  }).prefix('/students');
}).prefix('/api');
