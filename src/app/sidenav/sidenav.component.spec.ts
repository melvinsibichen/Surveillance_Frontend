import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav.component';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let httpTestingController: HttpTestingController;
  let apiGetPatientsByUnitSpy: jasmine.Spy;
  let apiService: ApiService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],



      declarations: [SidenavComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();



  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected facility ID in component state', () => {
    component.setSelectedFacility(1)

    expect(component.setSelectedFacility).toBe(1);
  });



  it('should set flagvalue to true', () => {
    expect(component.flagvalue).toBe(false);
    component.survilanceView();
    expect(component.flagvalue).toBe(true);
  })

  it('should set the bedValue and emptyBeds properties in the component state', () => {
    // Set up initial component state
    component.bedValue = false;
    component.emptyBeds = 0;

    // Call the function with sample arguments
    component.showPatientDetailes(1, 2);

    // Verify that the component state was updated correctly
    expect(component.bedValue).toBe(true);
    expect(component.emptyBeds).toBe(2);
  });


  it('should set unitData property with the response from getAllUnits()', () => {
    const mockResponse = [{ id: 1, name: 'Unit 1' }, { id: 2, name: 'Unit 2' }];
    const id = 1;
    component.setSelectedFacility(id);
    const req = httpTestingController.expectOne(`api/units/${id}`); expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
    expect(component.unitData).toEqual(mockResponse);
  });
  
})

