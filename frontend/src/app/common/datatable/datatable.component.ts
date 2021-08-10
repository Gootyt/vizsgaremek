import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent<T extends {[propname: string]: any}> implements OnInit {

  @Input() tableColumns: ITableColumn[] = [];
  @Input() list$: Observable<T[]> | null = null;

  @Output() selectOne: EventEmitter<T> = new EventEmitter<T>();

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

  onSelect(entity: T): void {
    this.selectOne.emit(entity);
  }

}
