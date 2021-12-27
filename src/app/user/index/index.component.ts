import { Component, OnInit } from '@angular/core';

import { IUser } from '../shared/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', '../user.component.css'],
})
export class IndexComponent implements OnInit {
  users: IUser[] = [];
  constructor(
    private SpinnerService: NgxSpinnerService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();

    this.userService.getAllUser().subscribe((data: IUser[]) => {
      this.users = data;
      console.log(this.users);
      this.SpinnerService.hide();
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((response) => {
      if (confirm('Are you sure to delete this user?? ')) {
        this.users = this.users.filter((user) => user.id !== id);
        console.log('user deleted successfully');
      }
    });
  }
}
