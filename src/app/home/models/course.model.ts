import { RoomResponse } from "./room.model";
import { TeacherResponse } from "./teacher.model";

export class CourseInfors {
  public name: string;
  public description: string;
  public lesson: number;
  public price: number;
  public numberOfStudent: number;
  // public allTime: number
}

export class CourseResponse {
  public courseId:string;
  public frommDate: string;
  public toDate: string;
  public roomDto: RoomResponse;
  public courseName:string;
  public currentQuantity: number;
  public teacherDto: TeacherResponse;
}
