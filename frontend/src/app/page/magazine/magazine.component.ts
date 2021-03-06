import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Magazine } from 'src/app/model/magazine';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MagazineService } from 'src/app/service/magazine.service';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.magazineColumns;
  list$: Observable<Magazine[]> = this.magazineService.getAll();

  constructor(
    private config: ConfigService,
    private magazineService: MagazineService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectOne(magazine: Magazine): void {
  }

}
