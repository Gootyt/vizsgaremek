import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  user$: BehaviorSubject<User | null> = this.auth.currentUserSubject$;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
