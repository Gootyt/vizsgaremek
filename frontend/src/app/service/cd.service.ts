import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cd } from '../model/cd';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CdService extends BaseService<Cd> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'cds';
  }

  getAll(): Observable<Cd[]> {
    return this.http.get<Cd[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }
}
