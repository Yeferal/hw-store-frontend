import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../../core/services/token.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit{
  iconFaAngleDown = faAngleDown;
  iconFaAngleRight = faAngleRight;
  iconMenu = faBars;
  today: Date = new Date();

  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    
  }

  singOf(){
    this.authService.getLogout().subscribe(
      () => {
        this.tokenService.removeToken();
        this.router.navigate(['login']);
      }
    );
  }
}
