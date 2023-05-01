import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogService } from '../service/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  
  constructor(private fb: FormBuilder, private logserv: LogService, private rt:Router){ }
  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    pass:['',[Validators.required]]
  })


get vemail(){
  return this.loginForm.get('email')
}

get vpass(){
  return this.loginForm.get('pass')
}

onLogin(){
  // for (let index = 0;index <= this.logserv.logarr.length -1; index ++) {
  //   if(this.loginForm.value.email == this.logserv.logarr[index].email &&
  //     this.loginForm.value.pass == this.logserv.logarr[index].pass){
  //       this.rt.navigate(['/admin']);e
  //       console.log("logged in");
        
  //     }
  let usr = this.logserv.logarr.find(user => user.email == this.loginForm.value.email)
  
      if(usr)
      {
        console.log('User Found');
        
        if(usr.pass==this.loginForm.value.pass){
          console.log('login success');
          this.rt.navigate(['/login/Register'])
        }
        else{
          console.log('wrong passwd');
          
        }
      }
      else{
        console.log('Wrong Email');
      }


}
}
