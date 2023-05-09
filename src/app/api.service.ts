import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllFacility = () => {
    return this.http.get("http://localhost:8080/facility/getFacilityNames")
  }

  getAllUnits = (id:number) => {
    return this.http.get("http://localhost:8080/unit/getUnitAndPatientsByFacility/"+id)
  }

  getPatientsByUnit = (id:Number) => {
    return this.http.get("http://localhost:8080/patients/getPatientsByUnit/"+id)
  }

}
