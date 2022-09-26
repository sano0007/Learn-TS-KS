"use strict";
exports.__esModule = true;
exports.School = void 0;
var School = /** @class */ (function () {
    function School() {
        this.teacherList = [];
        this.studentList = [];
        this.assignmentList = [];
    }
    School.prototype.addTeacher = function (teacher) {
        this.teacherList.push(teacher);
        // console.log(teacher.name);
    };
    School.prototype.addStudent = function (student) {
        this.studentList.push(student);
        // console.log(student.name);
    };
    School.prototype.printAssignment = function () {
        for (var _i = 0, _a = this.assignmentList; _i < _a.length; _i++) {
            var assignments = _a[_i];
            console.log(assignments);
        }
    };
    School.prototype.addAssignment = function (teacher, student) {
        this.assignmentList.push([teacher, student]);
    };
    return School;
}());
exports.School = School;
