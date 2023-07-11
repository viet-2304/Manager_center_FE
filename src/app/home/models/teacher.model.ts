export class TeacherInfo {
  public name: string;
  public description: string;
  public imageUrl: string;
}

export class TeacherResponse {
  public teacherId: string;
  public email: string;
  public fullName: string;
  public phoneNumber: string;
  public dateOfBirth: string;
  public address: string;
  public gender: string;
  public subjectName: string;
  public userId: string;
  public isActive: boolean;
  public imageUrl: string;
  public salaryPercent: number;
}

export class TeacherRegister {
  public email: string;
  public password: string;
  public fullName: string;
  public phoneNumber: string;
  public dateOfBirth: string;
  public address: string;
  public gender: string;
  public subjectId: string;
  public salaryPercent: number;
}
