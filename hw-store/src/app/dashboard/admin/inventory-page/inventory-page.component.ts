import { Component } from '@angular/core';
import { DashboardComponent } from '../../dashboard.component';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [DashboardComponent, InventoryComponent],
  templateUrl: './inventory-page.component.html',
  styleUrl: './inventory-page.component.scss'
})
export class InventoryPageComponent {

}
