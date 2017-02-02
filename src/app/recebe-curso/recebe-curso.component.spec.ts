/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecebeCursoComponent } from './recebe-curso.component';

describe('RecebeCursoComponent', () => {
  let component: RecebeCursoComponent;
  let fixture: ComponentFixture<RecebeCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebeCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebeCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
