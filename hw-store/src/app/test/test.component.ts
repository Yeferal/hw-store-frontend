import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { TopbarComponent } from '../shared/components/topbar/topbar.component';
import { TemplateContainComponent } from './template-contain/template-contain.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, TemplateContainComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  showSidebar = false;


  showSb(){
    this.showSidebar = !this.showSidebar;
  }
}
