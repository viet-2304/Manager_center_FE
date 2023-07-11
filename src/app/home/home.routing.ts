import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllTeacherComponent } from "./components/all-teacher/all-teacher.component";
import { MyCourseComponent } from "./components/my-course/my-course.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'myCourse',
    component: MyCourseComponent
  },
  {
    path:'teacher',
    component: AllTeacherComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {}
