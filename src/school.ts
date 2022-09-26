import {Student} from "./student";
import {Teacher} from "./teacher";

export class School {
    public teacherList: Teacher[] = [];
    public studentList: Student[] = [];
    public assignmentList: [Teacher, Student][] = [];


    public addTeacher(teacher: Teacher) {
        this.teacherList.push(teacher);
        // console.log(teacher.name);
    }

    public addStudent(student: Student) {
        this.studentList.push(student);
        // console.log(student.name);
    }

    public printAssignment() {
        for (const assignments of this.assignmentList)
            console.log(assignments);
    }

    public addAssignment(teacher: Teacher, student: Student) {
        this.assignmentList.push([teacher, student]);
    }

}