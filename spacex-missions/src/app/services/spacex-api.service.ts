import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/spacex-launch.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private readonly API_URL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.API_URL);
  }

  getLaunchesByYear(year: string): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.API_URL, {
      params: { launch_year: year }
    });
  }

  getLaunchById(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.API_URL}/${flightNumber}`);
  }
}
