import { NgModule } from '@angular/core';
import { HomeRouting } from './home.routing';

import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [HomeRouting],
  exports: [],
  declarations: [HomePageComponent],
  providers: [],
})
export class HomeModule {}
