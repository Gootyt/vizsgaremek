import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Magazine } from '../model/magazine';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MagazineService extends BaseService<Magazine> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'magazines';
  }

  getAll(): Observable<Magazine[]> {
    return this.http.get<Magazine[]>(`${this.config.apiUrl}${this.entity}?_expand=user`)
  }

}
