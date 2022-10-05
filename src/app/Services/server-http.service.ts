import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import {map, catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private REST_API_SERVER = 'http://34.101.62.222:9090';
  
  userLogin(data): Observable<any> {
    const url = `${this.REST_API_SERVER}/user/login`;
    return this.httpClient
      .post<any>(url, data)
      .pipe(catchError(this.handleError));
}

  getProducts(): Observable<any> {
    const customer_id = localStorage.getItem('id')
    const url = `${this.REST_API_SERVER}/user/products?customer_id=${customer_id}`;
    const cc = localStorage.getItem('cookie')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorzation': ''
        'check': cc,
      })
    };
    if(cc) {
      return this.httpClient
        .get<any>(url, httpOptions);
    }
  }

  getLessons(): Observable<any> {
    
    const url = `${this.REST_API_SERVER}/user/lessons?user_id=4`;
    const cc = localStorage.getItem('cookie')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorzation': ''
        'check': cc,
      })
    };
    if(cc) {
    return this.httpClient
      .get<any>(url,httpOptions)
      .pipe(catchError(this.handleError));
    }
  }

  logoutUser() {
    localStorage.removeItem('cookie')
    this.router.navigate(['/loginForm'])
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
