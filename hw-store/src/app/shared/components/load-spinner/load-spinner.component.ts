import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-load-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './load-spinner.component.html',
  styleUrl: './load-spinner.component.scss'
})
export class LoadSpinnerComponent {
  
  isLoading$ = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) { }
}
