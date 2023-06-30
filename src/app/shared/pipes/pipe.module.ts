import { NgModule } from '@angular/core';
import { AttendancePipe } from './attendance.pipe';
import { GenPipe } from './gen.pipe';

import { StatePipe } from './state.pipe';

@NgModule({
  imports: [],
  exports:  [GenPipe, StatePipe, AttendancePipe],
  declarations: [GenPipe, StatePipe, AttendancePipe],
  providers: [],
})
export class PipeModule { }
