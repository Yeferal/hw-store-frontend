import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() showTitle: boolean = true;
  @Input() title: string = '';
  @Input() alignItems: string = 'start'; // start, center, end
  @Input() showFooter: boolean = true;
  @Input() size: string = 'md'; // sm, md, lg, xl
  @Input() sizeTag: string;
  @Input() isAutoClose: boolean = false;
  showModal: boolean = false;

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

  onBackdropClick(event: MouseEvent): void {
    if (!this.isAutoClose) {
      return;
    }
    // Verifica si el clic fue fuera del contenido del modal
    if ((event.target as HTMLElement).classList.contains('modal-container')) {
      this.closeModal();
    }
  }
}
