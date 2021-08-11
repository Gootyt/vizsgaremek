import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/model/loan';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.loanColumns;
  list$: Observable<Loan[]> = this.loanService.getAll();

  constructor(
    private config: ConfigService,
    private loanService: LoanService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(loan: Loan): void {
    this.router.navigate(['/', 'loans', 'edit', loan._id]);
  }

}
