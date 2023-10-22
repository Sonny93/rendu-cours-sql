/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

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
    Route.get('/', 'StudentController.index');
    Route.post('/', 'StudentController.createStudent');

    Route.get('/:studentId', 'StudentController.getStudent');
    Route.put('/:studentId', 'StudentController.editStudent');
    Route.delete('/:studentId', 'StudentController.deleteStudent');
  }).prefix('/students')
  
}).prefix('/api');
