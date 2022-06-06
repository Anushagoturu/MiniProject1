import { Injectable } from "@angular/core";
import swal from 'sweetalert';


@Injectable()
export class MessageService{
    constructor() {}
    
    showSuccessMessage(msg1:string,msg2:string){
        swal(msg1,msg2,"success");
    }

    showErrorMessage(msg1:string,msg2:string){
        swal(msg1,msg2,"error");
    }

}