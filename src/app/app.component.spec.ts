import { AppComponent } from './app.component';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => MockBuilder(AppComponent));

  it('should create the app', () => {
    fixture = MockRender(AppComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'nt-angular-starter'`, () => {
    fixture = MockRender(AppComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
    expect(component.title).toEqual('nt-angular-starter');
  });

  it('should match snapshot', () => expect(MockRender(AppComponent).point.nativeElement).toMatchSnapshot());
});
