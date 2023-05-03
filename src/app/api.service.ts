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

  getAllUnits = () => {
    return this.http.get("http://localhost:8080/facility/getUnitNames")
  }

  getPatients = (data: any) => {
    return this.http.post("http://localhost:8080/patients/getPatients", data)
  }

}
