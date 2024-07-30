import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';
import { ListUsersComponent } from '../list-users/list-users.component';

@Component({
  selector: 'app-list-users-page',
  standalone: true,
  imports: [DashboardComponent, ListUsersComponent],
  templateUrl: './list-users-page.component.html',
  styleUrl: './list-users-page.component.scss'
})
export class ListUsersPageComponent {

}
