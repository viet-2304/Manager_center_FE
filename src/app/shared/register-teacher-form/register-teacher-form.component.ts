import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-teacher-form',
  templateUrl: './register-teacher-form.component.html',
  styleUrls: ['./register-teacher-form.component.scss'],
  providers: [MessageService],
})
export class RegisterTeacherFormComponent {
  constructor(private messageService: MessageService) {}
  public registerTeacher(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Taọ thành công',
      detail: 'Tài khoản giáo viên đã được được tạo',
    });
  }
}
