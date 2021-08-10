import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../model/loan';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LoanService extends BaseService <Loan> {

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) { 
    super(config, http);
    this.entity = 'loans';
  }
}