import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cd } from 'src/app/model/cd';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { CdService } from 'src/app/service/cd.service';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.scss']
})
export class CdsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.cdColumns;
  list$: Observable<Cd[]> = this.cdService.getAll();

  constructor(
    private config: ConfigService,
    private cdService: CdService,
  ) { }

  ngOnInit(): void {
  }

}
