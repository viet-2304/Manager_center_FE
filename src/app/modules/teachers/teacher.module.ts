import { NgModule } from '@angular/core';
import { AdminModule } from '../admin/admin.module';

import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { TeacherRouting } from './teacher.routing';
import { TeacherMainComponent } from './components/teacher-main/teacher-main.component';
import { TeacherSidebarComponent } from './components/teacher-sidebar/teacher-sidebar.component';
import { CommonModule } from '@angular/common';
import { CourseTableModule } from 'src/app/shared/course-table/course-table.module';
import { SalaryComponent } from './components/salary/salary.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SalaryDetailComponent } from './components/salary-detail/salary-detail.component';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  imports: [
    TeacherRouting,
    AdminModule,
    CommonModule,
    CourseTableModule,
    ButtonModule,
    TableModule,
    TooltipModule,
  ],
  exports: [],
  declarations: [
    TeacherPageComponent,
    TeacherMainComponent,
    TeacherSidebarComponent,
    SalaryComponent,
    SalaryDetailComponent,
  ],
  providers: [],
})
export class TeacherModule {}
