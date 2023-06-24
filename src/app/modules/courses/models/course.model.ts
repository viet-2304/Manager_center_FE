import { RoomResponse } from "src/app/home/models/room.model";

export class CourseDetailModel {
  public courseDetailId:string;
  public learningDate:string;
  public learnDate:string;
  public roomDto:RoomResponse;
  public learningSession:learningSession;
}

export class learningSession {
  public id: string;
  public fromTime: string;
  public toTime: string;
}
