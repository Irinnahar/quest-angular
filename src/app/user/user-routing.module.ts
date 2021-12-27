import { DetailsComponent } from './details/details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user.component';

export const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'details/:userId',
        component: DetailsComponent,
      },
      {
        path: 'edit/:userId',
        component: UpdateComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'update/:userId',
        component: UpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
