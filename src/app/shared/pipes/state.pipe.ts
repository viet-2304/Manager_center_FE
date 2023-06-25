import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"stateTransfer"})
export class StatePipe implements PipeTransform {
  transform(value: boolean): string {
      if(value == true) {
        return " Đang hoạt động "
      }
      return "Đã xóa"
  }
}
