import { Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Age, Page, Password, Trip } from 'src/interfaces/data';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  login: boolean;

  private url = '../assets/data.json';
  constructor(private http: HttpClient, private router: Router) { }

  gettrip(): Observable<Trip> {
    return this.http.get<Trip>(this.url);
  }
  getpage(): Observable<Page> {
    return this.http.get<Page>(this.url);
  }
  getage(): Observable<Age> {
    return this.http.get<Age>(this.url);
  }
  getpassword(): Observable<Password> {
    return this.http.get<Password>(this.url);
  }

  onPress() {
      this.login = true;
      return true;
    }
  }

