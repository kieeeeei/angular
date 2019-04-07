import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators,FormArray, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.styl']
})
export class ReactiveComponent implements OnInit {

  userForm;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      mail: [''],
      tel: [''],
    }, {
      validators: this.multiValidate
    });
  }

  ngOnInit() {
    this.userForm.setValidators(this.multiValidate);
  }

  get tel() {
    return this.userForm.get('tel') as FormControl;
  }

  get mail() {
    return this.userForm.get('mail') as FormControl;
  }

  onSubmit() {
    const user : User = {} as User;
    console.log(user);
    Object.assign(user, this.userForm.value);
    console.log(user);
  }

  multiValidate(group : FormGroup) {
    if(group.get('mail').value || group.get('tel').value) {
      return null;
    } else {
      return {multi : false};
    }
  }
}

interface User {
  name11 :string;
  mail : string;
  tel : number;
}
