import { NgModule } from "@angular/core";
import { RouterModule, Routes, ROUTES } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRouting {}
