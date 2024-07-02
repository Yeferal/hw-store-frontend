import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { TopbarComponent } from '../shared/components/topbar/topbar.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  showSidebar = false;


  showSb(){
    this.showSidebar = !this.showSidebar;
  }
}
