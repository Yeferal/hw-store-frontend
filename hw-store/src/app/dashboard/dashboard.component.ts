import { Component, ViewChild } from '@angular/core';
import { TopbarComponent } from "../shared/components/topbar/topbar.component";
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";
import { ModalComponent } from '../shared/components/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, ModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  @ViewChild('modal') modal!: ModalComponent;

  show(){
    this.modal.openModal();
  }
}
