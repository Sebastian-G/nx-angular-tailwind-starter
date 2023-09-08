import { AppComponent } from './app.component';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';

describe('AppComponent', () => {
  let fixture: MockedComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => MockBuilder(AppComponent));

  it('should create', () => {
    fixture = MockRender(AppComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
