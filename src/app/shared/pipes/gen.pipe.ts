import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"genTransfer"})
export class GenPipe implements PipeTransform {
  transform(value: string): string {
      if(value == "1") {
        return "Nam"
      }
      return "Nữ"
  }
}
