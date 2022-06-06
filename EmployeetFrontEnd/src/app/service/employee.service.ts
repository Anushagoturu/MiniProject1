import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";
import { Employee } from "../models/employee";

@Injectable()
export class EmployeeService{
    constructor(private http: HttpClient) {}
    

    public createEmployee(employee){
        return this.http.post("http://localhost:9090/create",employee,{responseType: 'text' as 'json'})
    }

    public getAllEmployees(){
        return this.http.get("http://localhost:9090/employee")  
    }

    public getEmployeeById(id){
        return this.http.get("http://localhost:9090/search?id="+id)
    }

    public deleteEmployee(id){
        return this.http.delete("http://localhost:9090/delete?id="+id)
    }

    public getEmployeeByName(name){
        return this.http.get("http://localhost:9090/searchName?name="+name)
    }

    public updateEmployee(employee){
        return this.http.put("http://localhost:9090/update",employee,{responseType: 'text' as 'json'});
    }
    
    
}