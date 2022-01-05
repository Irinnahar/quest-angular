import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../shared/services/user.service';
import { IUser } from '../shared/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'user-details',
  templateUrl: './details.component.html',
  styleUrls: ['../user.component.scss', './details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  id!: number;
  user!: IUser;
  subscription!: Subscription;
  isDataLoaded: boolean = false;

  constructor(
    private userService: UserService,
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
        console.log(this.user);
        this.SpinnerService.hide();
        this.isDataLoaded = true;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
