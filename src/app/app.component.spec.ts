import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  // Arrange
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Act
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Assert
    expect(app).toBeTruthy();
  });

  it(`should have as title 'UnitTestDemo'`, () => {
       // Act
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Assert
    expect(app.title).toEqual('UnitTestDemo');
  });

  it('should render title', () => {
       // Act
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

       // Assert
    expect(compiled.querySelector('.content span')?.textContent).toContain('UnitTestDemo app is running!');
  });
});

// If we want to run single test script, we need to use the "fdescribe" function.


// fdescribe('AppComponent',()=>{
//   it('First Test Script ',() => {
//     expect(10).toBe(10);
//     // console.log('I am inside the  test script ');
//   })
// })