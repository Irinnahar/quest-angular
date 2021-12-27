import { UserService } from './../shared/services/user.service';
import { routes } from './../user-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsComponent } from './details.component';
import { of } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    // location = TestBed.inject(Location);

    router.initialNavigation();
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
