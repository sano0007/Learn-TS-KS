import {Teacher} from "./teacher";
import {Student} from "./student";
import {School} from "./school";

console.log('..............');


const student1: Student = new Student("S1", 16);
const student2: Student = new Student("S2", 14);
const student3: Student = new Student("S3", 12);

const teacher1: Teacher = new Teacher("T1", 40);
const teacher2: Teacher = new Teacher("T2", 50);
const teacher3: Teacher = new Teacher("T3", 54);

const MySchool: School = new School();

MySchool.addStudent(student1);
MySchool.addStudent(student2);
MySchool.addStudent(student3);

MySchool.addTeacher(teacher1);
MySchool.addTeacher(teacher2);
MySchool.addTeacher(teacher3);

MySchool.addAssignment(teacher1, student3);
MySchool.addAssignment(teacher2, student1);
MySchool.addAssignment(teacher3, student2);

MySchool.printAssignment();