import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cd } from 'src/app/model/cd';
import { CdService } from 'src/app/service/cd.service';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.cdColumns;
  list$: Observable<Cd[]> = this.cdService.getAll();

  constructor(
    private config: ConfigService,
    private cdService: CdService
  ) { }

  ngOnInit(): void {
  }

}
