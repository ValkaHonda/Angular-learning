import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { 
      let vx =  http.get("https://api.github.com/users/iseek");
      console.log(vx);
  }
}