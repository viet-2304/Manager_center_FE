import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminRouting } from './admin.routing';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { MainComponent } from './components/main/main.component';
import { TableModule } from 'primeng/table';
import { StudentManagerTableComponent } from './components/student-manager-table/student-manager-table.component';
import { ManagerRoomComponent } from './components/manager-room/manager-room.component';
import { DialogModule } from 'primeng/dialog';
import { TeacherManagerTableComponent } from './components/teacher-manager-table/teacher-manager-table.component';
import { CourseDetailTableComponent } from './components/course-detail-table/course-detail-table.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ListStudentInCourseModule } from 'src/app/shared/list-student-in-course/list-student-in-course.module';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { AttendanceModule } from 'src/app/shared/attendace-student/attendace-student.module';
import { CourseDetailTableModule } from 'src/app/shared/course-detail-table/course-detail.module';
import { CourseTableModule } from 'src/app/shared/course-table/course-table.module';
import { TeacherRegisterForm } from 'src/app/shared/register-teacher-form/register-teacher-form.module';
@NgModule({
  declarations: [
    AdminPageComponent,
    SidebarComponent,
    AdminHeaderComponent,
    MainComponent,
    StudentManagerTableComponent,
    ManagerRoomComponent,
    TeacherManagerTableComponent,
    CourseDetailTableComponent,
  ],
  imports: [
    CourseDetailTableModule,
    CourseTableModule,
    CommonModule,
    AdminRouting,
    SidebarModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    DynamicDialogModule,
    ToastModule,
    ListStudentInCourseModule,
    PipeModule,
    TeacherRegisterForm,
    AttendanceModule
  ],
  exports: [
    SidebarComponent,
    AdminHeaderComponent,
    MainComponent,
    CourseDetailTableComponent,
    // CourseManagerTableComponent
  ]
})
export class AdminModule {}
