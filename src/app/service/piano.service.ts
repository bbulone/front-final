import { Injectable } from '@angular/core';
import { Piano } from '../core/models/piano';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { max, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PianoService {
  private readonly PianoPath: string = '/piano';

  constructor(private _http: HttpClient) {}

  get(): Observable<Piano[]> {
    return this._http.get<Piano[]>(
      `${environment.apiBaseUrl}${this.PianoPath}`
    );
  }

  getById(id: number): Observable<Piano> {
    return this._http.get<Piano>(
      `${environment.apiBaseUrl}${this.PianoPath}/${id}`
    );
  }

  create(Piano: Piano): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.PianoPath}`,
      Piano
    );
  }

  update(Piano: Piano): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.PianoPath}/${Piano.id}`,
      Piano
    );
  }

  delete(id: number): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.PianoPath}/${id}`
    );
  }
}
