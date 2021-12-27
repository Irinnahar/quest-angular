import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../user.component.css', './create.component.css'],
})
export class CreateComponent implements OnInit {
  userAddForm!: FormGroup;

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userAddForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl(''),
      }),
      company: new FormGroup({
        name: new FormControl(''),
        catchPhrase: new FormControl(''),
        bs: new FormControl(''),
      }),
    });
  }

  get inputName() {
    return this.userAddForm.get('name');
  }
  submitForm() {
    this.userService.createUser(this.userAddForm.value).subscribe((res) => {
      console.log(res);
      console.log('User created successfully!');
      //this.router.navigateByUrl('user');
      this.router.navigate(['user']);
    });
  }
}
