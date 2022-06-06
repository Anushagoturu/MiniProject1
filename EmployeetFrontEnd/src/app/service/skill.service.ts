import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";
import { Employee } from "../models/employee";

@Injectable()
export class SkillService{
    constructor(private http: HttpClient) {}
    

    public getSkills(){
        return this.http.get("http://localhost:9090/skills");
    }
}