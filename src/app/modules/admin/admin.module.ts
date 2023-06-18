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
import { StatePipe } from './pipes';
import { GenPipe } from './pipes/gen.pipe';
import { TeacherManagerTableComponent } from './components/teacher-manager-table/teacher-manager-table.component';
@NgModule({
  declarations: [
    AdminPageComponent,
    SidebarComponent,
    AdminHeaderComponent,
    MainComponent,
    StudentManagerTableComponent,
    ManagerRoomComponent,
    StatePipe,
    GenPipe,
    TeacherManagerTableComponent
  ],
  imports: [
    CommonModule,
    AdminRouting,
    SidebarModule,
    ButtonModule,
    TableModule,
    DialogModule
  ],
})
export class AdminModule {}
