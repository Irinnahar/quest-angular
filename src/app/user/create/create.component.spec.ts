import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../shared/services/user.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class RouterStub {
  navigate(params: any) {}
}

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let userService: UserService;
  let httpMock: HttpTestingController;
  let http: HttpClient;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],

      providers: [
        {
          provide: Router,
          useClass: RouterStub,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    http = TestBed.inject(HttpClient);
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    userService = fixture.debugElement.injector.get(UserService);
    router: TestBed.inject(Router);

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('Test a form group element count', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#userAddForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(12);
  });

  it('should check username value before entering some value and validation', () => {
    const userFormUsernameElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[1];

    const usernameValueFormGroup = component.userAddForm.get('username');
    expect(userFormUsernameElement.value).toEqual(
      usernameValueFormGroup?.value
    );
    expect(usernameValueFormGroup?.errors).not.toBeNull();
    expect(usernameValueFormGroup?.hasError('required')).toBeTruthy();
  });

  it('should check username value after entering some value and validation', () => {
    const userFormUsernameElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[1];
    userFormUsernameElement.value = 'irin@gmail.com';
    userFormUsernameElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const usernameValueFormGroup = component.userAddForm.get('username');
      expect(userFormUsernameElement.value).toEqual(
        usernameValueFormGroup?.value
      );
      expect(usernameValueFormGroup?.errors).toBeNull();
    });
  });

  it('should create a user after the form is validate', () => {
    const userFormNameElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[0];
    const userFormUsernameElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[1];
    const userFormPhoneElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[2];
    const userFormEmailElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[3];
    const userFormWebsiteElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[4];
    const userFormStreetElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[5];
    const userFormSuiteElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[6];
    const userFormCityElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[7];
    const userFormZipcodeElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[8];
    const userFormCompanyNameElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[9];
    const userFormCatchPhraseElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[10];
    const userFormBsElement: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#userAddForm')
        .querySelectorAll('input')[11];

    userFormNameElement.value = 'Leanne Graham';
    userFormUsernameElement.value = 'Bret';
    userFormPhoneElement.value = 'Sincere@april.biz';
    userFormWebsiteElement.value = 'hildegard.org';
    userFormPhoneElement.value = '1-770-736-8031';
    userFormWebsiteElement.value = 'hildegard.org';
    userFormStreetElement.value = 'Kulas Light';
    userFormSuiteElement.value = 'Apt. 556';
    userFormCityElement.value = 'Gwenborough';
    userFormZipcodeElement.value = '92998-3874';
    userFormCompanyNameElement.value = 'Romaguera-Crona';
    userFormCatchPhraseElement.value = 'Multi-layered client-server neural-net';
    userFormBsElement.value = 'harness real-time e-markets';

    userFormNameElement.dispatchEvent(new Event('input'));
    userFormUsernameElement.dispatchEvent(new Event('input'));
    userFormPhoneElement.dispatchEvent(new Event('input'));
    userFormWebsiteElement.dispatchEvent(new Event('input'));
    userFormPhoneElement.dispatchEvent(new Event('input'));
    userFormWebsiteElement.dispatchEvent(new Event('input'));
    userFormStreetElement.dispatchEvent(new Event('input'));
    userFormSuiteElement.dispatchEvent(new Event('input'));
    userFormCityElement.dispatchEvent(new Event('input'));
    userFormZipcodeElement.dispatchEvent(new Event('input'));
    userFormCompanyNameElement.dispatchEvent(new Event('input'));
    userFormCatchPhraseElement.dispatchEvent(new Event('input'));
    userFormBsElement.dispatchEvent(new Event('input'));

    const isUserFormValid = component.userAddForm.valid;
    fixture.whenStable().then(() => {
      expect(!isUserFormValid).toBeTruthy();
    });
  });
});
