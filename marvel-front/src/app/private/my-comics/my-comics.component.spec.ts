import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComicsComponent } from './my-comics.component';

describe('MyComicsComponent', () => {
  let component: MyComicsComponent;
  let fixture: ComponentFixture<MyComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComicsComponent]
    });
    fixture = TestBed.createComponent(MyComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
