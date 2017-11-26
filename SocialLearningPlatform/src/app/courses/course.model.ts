export class Course {
  public courseName: string;
  public instructorName: string;
  public description: string;
  public imagePath: string;

  constructor(courseName: string, instructorName: string, desc: string, imagePath: string) {
    this.courseName = courseName;
    this.instructorName = instructorName;
    this.description = desc;
    this.imagePath = imagePath;
  }

}
