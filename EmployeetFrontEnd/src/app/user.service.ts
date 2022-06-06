import { Injectable } from '@angular/core';
import { BoardService} from './board.service';
// import { HttpClient } from '@angular/common/http';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private boardService:BoardService) { }

  logout()
  {
    localStorage.removeItem("userId");
  }



  getUser():any
  {
    return localStorage.getItem("userId");
  }

  isUserAvailable:boolean = false;

  checkUser():boolean
  {
    if(this.getUser() == null)
    {
      this.isUserAvailable = false;
    }
    else{
      this.isUserAvailable = true
    }

    return this.isUserAvailable;
    // console.log( " isUserAvailable : " + this.isUserAvailable);
  }



  // ---------------------
  postRegistration(userForm:User){
   return this.boardService.postRegister(userForm);
  }


  getRegistration(){
    return this.boardService.getRegister();
  }

  deleteRegistration(userid:any)
  {
    return this.boardService.deleteRegister(userid);
  }
}
