import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test a form group element count', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#userAddForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(12);
  });

  it('CHECK CREATE USER FORM IS VALID WHEN VALIDATION ARE FULFILLED', () => {
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
      expect(isUserFormValid).toBeTruthy();
    });
  });
});
