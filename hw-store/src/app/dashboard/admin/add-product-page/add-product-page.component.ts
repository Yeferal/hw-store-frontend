import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';

@Component({
  selector: 'app-add-product-page',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.scss'
})
export class AddProductPageComponent {

}
