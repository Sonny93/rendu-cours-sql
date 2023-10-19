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

Route.inertia('/', 'Home');

Route.get('/docs', async () => AutoSwagger.docs(Route.toJSON(), swagger));
Route.get('/swagger', async () => AutoSwagger.ui('/docs'));

Route.group(() => {
  Route.get('/hello', () => 'world!');

  Route.group(() => {
    Route.get('/', 'CourseController.index');
    Route.post('/', 'CourseController.createCours');

    Route.get('/:courseId', 'CourseController.getCours');
    Route.put('/:courseId', 'CourseController.editCours');
    Route.delete('/:courseId', 'CourseController.deleteCours');
  }).prefix('/courses');
}).prefix('/api');
