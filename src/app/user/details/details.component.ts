import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../user.service';
import { User } from './../user';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'user-details',
  templateUrl: './details.component.html',
  styleUrls: ['../user.component.css', './details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  user!: User;

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
    this.userService.find(this.id).subscribe((data: User) => {
      this.user = data;
      console.log(this.user);
      this.SpinnerService.hide();
    });
  }
}
