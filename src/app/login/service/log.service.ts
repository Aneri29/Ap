import { Injectable } from '@angular/core';
import { userLog } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logarr:Array<userLog> = [
    {email: "aneri@gmail.com", pass: "aneri123"},
    {email: "user@gmail.com", pass: "user123"},
    {email: "admin@gmail.com", pass: "admin123"}
  ];

  checkLog(){
    return this.logarr;
}
}
