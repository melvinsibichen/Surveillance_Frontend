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
  }
  facilityData: any = []
  unitData: any = []
  patientData: any = []
  flagvalue: boolean = false;  
  facilityId:Number=0;
  unitId:Number=0
  emptyBeds:Number=0;
  bedValue:boolean=false;
  survilanceView = () => {
    this.flagvalue = true
  }
  survilanceNonView = () => {
    this.flagvalue = false
  }
  setSelectedFacility(id:number) {
    // console.log(id)
    this.api.getAllUnits(id).subscribe(
      (response:any)=>{
        
        this.unitData=response
        // console.log(response)
      }      
    )
  }

  showPatientDetailes = (id:Number,bed:Number) => {
    this.bedValue=true
    this.emptyBeds=bed
    this.api.getPatientsByUnit(id).subscribe(
      (response:any)=>{
        // console.log(response)
        this.patientData = response
      }
    )
  }
}
