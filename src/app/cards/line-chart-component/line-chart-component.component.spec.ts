import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LineChartComponentComponent } from './line-chart-component.component';

describe('LineChartComponentComponent', () => {
  let component: LineChartComponentComponent;
  let fixture: ComponentFixture<LineChartComponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
