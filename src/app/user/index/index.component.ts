import { Component, OnInit } from '@angular/core';

import { IUser } from '../shared/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss', '../user.component.scss'],
})
export class IndexComponent implements OnInit {
  users: IUser[] = [];
  isDeleted: boolean = false;

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
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        if (confirm('Are you sure to delete this user?? ')) {
          this.users = this.users.filter((user) => user.id !== id);
          console.log('user deleted successfully');
          this.isDeleted = true;

          setTimeout(() => {
            this.isDeleted = false;
          }, 2000);
        }
      },
      error: (error) => {
        const errMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
}
