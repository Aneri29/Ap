import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

constructor(private fb:FormBuilder){ }

regForm = this.fb.group({
  fullName: this.fb.group({
    fname:['',[Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    lname:['',[Validators.required, Validators.pattern('^[a-zA-Z]*$')]]
  }),
  email:['',[Validators.required,Validators.email]],
  pass:['',Validators.required],
  dob:['',Validators.required],
  gender:['',Validators.required]
})


get vfname(){
  return this.regForm.get('fullName')?.get('fname')
}
get vlname(){
  return this.regForm.get('fullName')?.get('lname')
}
get vemail(){
  return this.regForm.get('email')
}
get vpass(){
  return this.regForm.get('pass')
}

get vdob(){
  return this.regForm.get('pass')
}
get vgender(){
  return this.regForm.get('gender')
}

}
