import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../../../core/services/account.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent implements OnInit{

  @ViewChild('modalMsg') modal!: ModalComponent;

  iconEye = faEye;
  iconEyeSlash = faEyeSlash;

  showMsgError = false;
  msgError = 'Error, El usuario ya existe';

  userForm: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    roleId: new FormControl(0,Validators.required)
  });

  isFormSubmitted: boolean = false;

  listRole = [
    {id:1, name: 'ADMIN'},
    {id:2, name: 'OPERATOR'},
    {id:3, name: 'RECEPTIONIST'},
    {id:4, name: 'CLIENT'}
  ];


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
      // this.modal.openModal();
  }

  onSubmit(){
    this.isFormSubmitted = true;
    if (this.userForm.invalid) return;

    //VERIFICAR EL USERNAME

    this.accountService.postAccount(this.userForm.value).subscribe({
      next: (res) => {
        this.msgError = `Usuario agregado correctamente`
        this.modal.openModal();
        this.userForm.reset();
        this.isFormSubmitted = false;
      },
      error: (err) => {
        console.log(err);
        this.msgError = `ERROR: los campos no son validos`
        this.modal.openModal();
      }
    });
  }
}
