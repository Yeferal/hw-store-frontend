import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-create-account-page',
  standalone: true,
  imports: [DashboardComponent, CreateAccountComponent],
  templateUrl: './create-account-page.component.html',
  styleUrl: './create-account-page.component.scss'
})
export class CreateAccountPageComponent {

}
