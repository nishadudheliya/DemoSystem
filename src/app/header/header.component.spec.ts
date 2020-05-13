import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { SignupComponent } from '../auth/signup/signup.component';
import { TaskComponent } from '../user/task/task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DOMHelper } from '../testing/dom-helper';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let domHelper: DOMHelper<HeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, SignupComponent, TaskComponent],
      imports: [MatGridListModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes([
          { path: 'signup', component: SignupComponent }
        ])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    domHelper = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('simple Html', () => {
    it('should be more than one button on page', () => {
      expect(domHelper.count('button')).toBeGreaterThanOrEqual(1);
    })
  
    it('should be login button first on page', () => {
      expect(domHelper.singleText('button')).toBe('Login');
    })
  
    it('should be signup button on page', () => {
      expect(domHelper.specificText('button','SignUp')).toBe(1);
    })
  
    it('should be Hello, user button second on page', () => {
      const buttons = fixture.debugElement.queryAll(By.css('button'));
      const signupbtn: HTMLButtonElement = buttons[2].nativeElement;
      expect(signupbtn.textContent).toBe('Hello, user');
    })  

    it('should have only max 3 buttons', () => {
      const buttons = fixture.debugElement.queryAll(By.css('button'));
      expect(buttons.length).toBe(3);
    })
  })
 describe('Navigation Test', () => {
  it('should navigate to default route', () => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  })

  it('should navigate to signup page', () => {
    const location = TestBed.get(Location);
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const signUpbtn: HTMLButtonElement = buttons[1].nativeElement;
    signUpbtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/signup');
    })
  })
 })
  
});
