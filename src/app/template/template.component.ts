import { Component, OnInit } from '@angular/core';
// import { User } from '../user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.styl']
})
export class TemplateComponent implements OnInit {

  user : User={} as User;

  list :string[] = ['沖縄','東京','大阪'];

  constructor() { }

  ngOnInit() {
    this.user.obj = {street:""};
  }

  onSubmit() {
    const user : User = this.user;
    console.log(user);
  }

}

interface User {
  name11 :string;
  mail : string;
  tel : number;
  prefecture : string;
  sex : string;
  obj : {
    street : string
  }
}
