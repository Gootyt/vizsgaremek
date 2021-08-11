import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap(params => this.userService.get(params.id))
  );
  user: User = new User();
  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => {
        this.user = user;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
    _id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  */
    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.user._id}),
      new InputField({key: 'firstName', label: 'First Name', type: 'text', value: (this.user.firstname as string),
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'First name is required.'}),
      new InputField({key: 'lastName', label: 'Last Name', type: 'text', value: (this.user.lastname as string),
        validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/)], errorMessage: 'Last name is required.'}),
      new TextareaField({key: 'email', label: 'Email', type: 'text', value: (this.user.email as string), }),
      new TextareaField({key: 'address', label: 'Address', value: this.user.address as string}),
    ];
  }

  onSave(ngForm: NgForm): void {
    this.userService.update(ngForm.value).subscribe(
      p => this.router.navigate(['/', 'users'])
    );
  }

  delete(user: User): void {
    if (confirm('Are you sure?')) { 
      this.userService.remove(user._id).subscribe(
        p => this.router.navigate(['/', 'users'])
      );
    }
  }

}
