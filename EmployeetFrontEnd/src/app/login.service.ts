import { Injectable } from '@angular/core';
import { User } from './User';
import {BoardService} from './board.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private boardService : BoardService) { }

  postLogin(loginForm:User){
    return this.boardService.postLogin(loginForm);
   }
}
