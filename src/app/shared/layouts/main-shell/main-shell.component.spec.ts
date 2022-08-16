import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainShellComponent } from './main-shell.component';

describe('MainShellComponent', () => {
  let component: MainShellComponent;
  let fixture: ComponentFixture<MainShellComponent>;

  beforeEach(async() => {

    await TestBed.configureTestingModule({
      declarations: [MainShellComponent],
      providers: [
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainShellComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
