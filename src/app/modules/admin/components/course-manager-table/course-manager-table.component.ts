// import { ChangeDetectorRef, Component, Input } from '@angular/core';
// import { MessageService } from 'primeng/api';
// import { DialogService } from 'primeng/dynamicdialog';
// import { CourseResponse } from 'src/app/home/models/course.model';
// import { TeacherResponse } from 'src/app/home/models/teacher.model';
// import { CourseService } from 'src/app/home/services/course.service';
// import { ListStudentInCourseComponent } from 'src/app/shared/list-student-in-course/list-student-in-course.component';
// import { AdminService } from '../../service/admin.service';

// @Component({
//   selector: 'app-course-manager-table',
//   templateUrl: './course-manager-table.component.html',
//   styleUrls: ['./course-manager-table.component.scss'],
//   providers: [DialogService, MessageService],
// })
// export class CourseManagerTableComponent {
//   public course: CourseResponse[];
//   @Input() auth: string = "admin";
//   @Input() teacherId: string;
//   constructor(
//     private courseService: CourseService,
//     private cdr: ChangeDetectorRef,
//     private dialogService: DialogService
//   ) {}
//   ngOnInit(): void {
//     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//     //Add 'implements OnInit' to the class.

//     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
//     //Add '${implements OnChanges}' to the class.

//     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//     //Add 'implements OnInit' to the class.
//     this.getCourse();
//   }

//   public showListStudent(courseId: string): void {
//     this.dialogService.open(ListStudentInCourseComponent, {
//       data: {
//         courseId: courseId,
//       },
//       header: 'Danh sách học sinh',
//       width: '50%',
//       contentStyle: { overflow: 'auto' },
//       baseZIndex: 10000,
//       maximizable: true,
//     });
//   }

//   private getCourse(): void {
//     console.log("auth: ", this.auth);

//     if (this.auth === 'admin') {
//       this.courseService.getAllCourse().subscribe((res) => {
//         this.course = res;
//         console.log('course: ', this.course);

//         this.cdr.detectChanges();
//       });
//     } else {
//       this.courseService
//         .getCourseByTeacherId(this.teacherId)
//         .subscribe((res) => {
//           this.course = res;
//           console.log('course: ', this.course);

//           this.cdr.detectChanges();
//         });
//     }
//   }
// }
