import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private apiBaseUrl = 'https://cricbuzz-cricket.p.rapidapi.com';
  private apiKey = '0e13709528msh897ab8fbb561a52p15bfbdjsn18f5541f5223';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
    });
  }

  public getRankings(type: string, category: string): Observable<any> {
    const url = `${this.apiBaseUrl}/stats/v1/ranking/${category}?formatType=${type}`;
    const headers = this.getHeaders();

    return this.http.get(url, { headers });
  }
}
