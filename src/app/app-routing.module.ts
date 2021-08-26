import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterCourseComponent } from './user/register-course/register-course.component';
import { RegisterGroupComponent } from './user/register-group/register-group.component';
import { RegisterStudentComponent } from './user/register-student/register-student.component';
import { RegisterTeacherComponent } from './user/register-teacher/register-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerGroup',
    component: RegisterGroupComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
