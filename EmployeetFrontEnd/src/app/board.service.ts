import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  Url='http://localhost:9090/'
  constructor(private http:HttpClient) { }

  postRegister(userForm:any):Observable<any>{
    console.log(JSON.stringify(userForm));
    return this.http.post<any>("http://localhost:9090/register",userForm);
  }

  getRegister():Observable<User>{
    return this.http.get<User>(this.Url+'GetRegister');
  }
  deleteRegister(userId:any):Observable<any>{
    return this.http.delete(this.Url+'DeleteRegister'+userId);
  }


  //User Login :
  postLogin(userLogin:any):Observable<any>{
    return this.http.post<any>('http://localhost:9090/login',userLogin);
  }
}
