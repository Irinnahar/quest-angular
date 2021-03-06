import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { IUser } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: [
    '../user.component.scss',
    '../create/create.component.scss',
    './update.component.scss',
  ],
})
export class UpdateComponent implements OnInit, OnDestroy {
  id!: number;
  user!: IUser;
  userUpdateForm!: FormGroup;
  subscription!: Subscription;
  isDataLoaded: boolean = false;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();

    this.id = this.route.snapshot.params['userId'];
    this.subscription = this.userService
      .getSingleUser(this.id)
      .subscribe((data: IUser) => {
        this.user = data;
        this.SpinnerService.hide();
        this.isDataLoaded = true;
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
      .updateUser(this.id, this.userUpdateForm.value)
      .subscribe((res) => {
        console.log(res);
        console.log('User updated successfully!');
        this.router.navigate(['user']);
        this.SpinnerService.hide();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
