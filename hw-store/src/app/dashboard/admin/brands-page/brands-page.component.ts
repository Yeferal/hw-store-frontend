import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';

@Component({
  selector: 'app-brands-page',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './brands-page.component.html',
  styleUrl: './brands-page.component.scss'
})
export class BrandsPageComponent {

}
