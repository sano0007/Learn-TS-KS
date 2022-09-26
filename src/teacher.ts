import {Person} from "./person";

export class Teacher extends Person {
    public constructor(name: string, age: number) {
        super(name, age);
    }
}