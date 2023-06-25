import { NgModule } from '@angular/core';
import { GenPipe } from './gen.pipe';

import { StatePipe } from './state.pipe';

@NgModule({
  imports: [],
  exports:  [GenPipe, StatePipe],
  declarations: [GenPipe, StatePipe],
  providers: [],
})
export class PipeModule { }
