import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceService<T> {
  private readonly APIUrl = environment.APIUrl;
  constructor(private httpClient: HttpClient) {}

  fromServerModel(json: any): T {
    return json;
  }

  getList(url: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.APIUrl + url}`).pipe(
      map((list) => list.map((item) => this.fromServerModel(item))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError(error);
  }
}
