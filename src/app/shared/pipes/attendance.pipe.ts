import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"attendanceTransfer"})
export class AttendancePipe implements PipeTransform {
  transform(value: string): string {
      if(value == "present") {
        return "Học"
      }
      if(value == "absent"){

        return "Vắng"
      }
      return "Vắng có phép"
  }
}
