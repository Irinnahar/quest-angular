import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../shared/services/user.service';
import { IUser } from '../shared/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'user-details',
  templateUrl: './details.component.html',
  styleUrls: ['../user.component.css', './details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  user!: IUser;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.id = this.route.snapshot.params['userId'];
    console.log(this.id);
    this.userService.getSingleUser(this.id).subscribe((data: IUser) => {
      this.user = data;
      console.log(this.user);
      this.SpinnerService.hide();
    });
  }
}
