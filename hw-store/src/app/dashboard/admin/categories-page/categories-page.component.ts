import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent {

}
