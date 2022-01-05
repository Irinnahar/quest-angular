import { Component, OnDestroy, OnInit } from '@angular/core';

import { IUser } from '../shared/models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss', '../user.component.scss'],
})
export class IndexComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  isDeleted: boolean = false;
  subscription!: Subscription;

  constructor(
    private SpinnerService: NgxSpinnerService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();

    this.subscription = this.userService
      .getAllUser()
      .subscribe((data: IUser[]) => {
        this.users = data;
        console.log(this.users);
        this.SpinnerService.hide();
      });
  }

  deleteUser(id: number) {
    this.subscription = this.userService.deleteUser(id).subscribe({
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
        console.error('There was an error!', errMessage);
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
