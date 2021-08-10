import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/model/loan';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.loanColumns;
  list$: Observable<Loan[]> = this.loanService.getAll();

  constructor(
    private config: ConfigService,
    private loanService: LoanService
  ) { }

  ngOnInit(): void {
  }

}
