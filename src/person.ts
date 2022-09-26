export abstract class Person {
    public name: string;
    public age: number;

    protected constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}