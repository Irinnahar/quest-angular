import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: [
    '../user.component.css',
    '../create/create.component.css',
    './update.component.css',
  ],
})
export class UpdateComponent implements OnInit {
  id: number = 0;
  user!: User;
  userUpdateForm!: FormGroup;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();

    this.id = this.route.snapshot.params['userId'];
    this.userService.find(this.id).subscribe((data: User) => {
      this.user = data;
      this.SpinnerService.hide();
    });

    this.userUpdateForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
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

  submitForm() {
    this.SpinnerService.show();
    this.userService
      .update(this.id, this.userUpdateForm.value)
      .subscribe((res) => {
        console.log(res);
        console.log('User updated successfully!');
        this.router.navigateByUrl('user');
        this.SpinnerService.hide();
      });
  }
}
