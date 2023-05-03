import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private api: ApiService) {
    api.getAllFacility().subscribe(
      (response: any) => {
        this.facilityData = response
      }
    )
    api.getAllUnits().subscribe(
      (response: any) => {
        this.unitData = response
      }
    )
  }

  facilityData: any = []
  unitData: any = []
  patientData: any = []
  flagvalue: boolean = false;

  facilityName = "";
  unit = ""

  survilanceView = () => {
    this.flagvalue = true
  }
  survilanceNonView = () => {
    this.flagvalue = false
  }

  setSelectedFacility(facility: string) {
    this.facilityName = facility;
    console.log(this.facilityName)
  }

  setSelectedUnit(unit: string) {
    this.unit = unit;
  }

  showPatientDetailes = () => {
    if (this.facilityName == "") {
      alert("Please select a Facility Name")
    } else {
      let data: any = { "facility": this.facilityName, "unit": this.unit }
      this.api.getPatients(data).subscribe(
        (response: any) => {
          this.patientData = response;
        }
      )
    }
  }
}
