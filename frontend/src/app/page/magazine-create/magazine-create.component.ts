import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Magazine } from 'src/app/model/magazine';
import { MagazineService } from 'src/app/service/magazine.service';

@Component({
  selector: 'app-magazine-create',
  templateUrl: './magazine-create.component.html',
  styleUrls: ['./magazine-create.component.scss']
})
export class MagazineCreateComponent implements OnInit {

  magazine: Magazine = new Magazine();

  constructor(
    private magazineService: MagazineService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.magazineService.create(ngForm.value).subscribe(
      magazine => this.router.navigate(['/', 'magazines']),
      err => console.error(err)
    );
  }

}
