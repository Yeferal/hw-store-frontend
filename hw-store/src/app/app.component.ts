import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadSpinnerComponent } from './shared/components/load-spinner/load-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, LoadSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'hw-store';
  theme = 'light-theme'
  
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;
    if (localStorage) {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        console.log("Theme: ", savedTheme);
        this.theme = savedTheme;
      } else {
        console.log("Not existe theme, add: "+this.theme);
        localStorage.setItem('theme', this.theme)
      }
      document.documentElement.className = this.theme;
    }
  }

  ngOnInit() {
    // this.browserStorageService.storage.subscribe((localStorage) => {
    //   console.log(localStorage.getItem('theme'));
      
    // });

    // if (this.platform.isBrowser && window?.localStorage) {
    //   this.storage = window.localStorage;
    // }
    // const savedTheme = localStorage.getItem('theme');
    // if (savedTheme) {
    //   console.log("Theme: ", savedTheme);
      
    //   this.theme = savedTheme;
    // } else {
    //   console.log("Not existe theme, add: "+this.theme);
    //   localStorage.setItem('theme', this.theme)
    // }
    // document.documentElement.className = this.theme;
  }
}
