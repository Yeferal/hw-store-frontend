import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface DataTextfield {
  label: string;
  name: string;
  isRequired?: boolean | false;
  type: string;
  value?: any;
  placeholder: string;
  disabled?: boolean | false;
  readonly?: boolean | false;
  isSelectList?: boolean | false;
  dataList?: Array<any> | undefined;
}


@Component({
  selector: 'app-textfiled',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './textfiled.component.html',
  styleUrl: './textfiled.component.scss'
})
export class TextfiledComponent implements OnInit{
  iconEye = faEye;
  iconEyeSlash = faEyeSlash;

  @Input() dataTextfield: DataTextfield;

  showPassword = false;
  passwordType = 'password'

  ngOnInit() {
    console.log(this.dataTextfield);
    
  }

  setPassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordType = 'text'
    } else {
      this.passwordType = 'password'
    }
  }

}
