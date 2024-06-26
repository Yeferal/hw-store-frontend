import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  showSidebar = false;


  showSb(){
    this.showSidebar = !this.showSidebar;
  }
}
