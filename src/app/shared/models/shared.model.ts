export class CourseDetail {
  public learnDate: string;
  public roomId: string;
  public learningSessionId: string
}

export class CourseRegister {
  public courseName: string;
  public teacherId: string;
  public fromDate: string;
  public toDate: string;
  public maxQuantity: number;
  public price: number;
  public courseDetailDtoList: CourseDetail[];
}

export class TemptToShow {
  public id:String;
  public name: string;
}
