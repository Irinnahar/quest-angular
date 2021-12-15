import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';
import { User } from './../user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', '../user.component.css'],
})
export class IndexComponent implements OnInit {
  users: User[] = [];
  constructor(
    private SpinnerService: NgxSpinnerService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();

    this.userService.getAll().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
      this.SpinnerService.hide();
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe((response) => {
      if (confirm('Are you sure to delete this user?? ')) {
        this.users = this.users.filter((user) => user.id !== id);
        console.log('user deleted successfully');
      }
    });
  }
}
