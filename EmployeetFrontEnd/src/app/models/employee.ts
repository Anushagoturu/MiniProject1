import { Skill } from '../models/skill';

export class Employee{
    constructor(
        public name:string,
        public email:string,
        public dob:Date,
        public skills:Skill[]
    ){} 
}