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
  private REST_API_SERVER = 'http://34.101.62.222:9090';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorzation': 'macbook.pro|1662355052|F5FKwW3VcwyuoI81ZKX51HApmmgi8jNtbTplBq8KGEP|1051697120bc47ba5b88d8e475782279492876d7168886418e44ed85720ba0d9'
    })
  };

  constructor(private httpClient: HttpClient, private router: Router) { }

  public addUser(data): Observable<any> {
    const url = `${this.REST_API_SERVER}/user/login`;
    this.router.navigate(['/list']);
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getProducts(): Observable<any> {
    const url = `${this.REST_API_SERVER}/admin/products`;
    return this.httpClient.get<any>(url, this.httpOptions);
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
