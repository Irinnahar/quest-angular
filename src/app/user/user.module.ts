import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user.component';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    UserComponent,
    IndexComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent,
    DetailsComponent,
  ],
  providers: [UserService],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
