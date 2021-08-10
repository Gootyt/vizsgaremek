import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.userColumns;
  list$: Observable<User[]> = this.userService.getAll();

  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

}
