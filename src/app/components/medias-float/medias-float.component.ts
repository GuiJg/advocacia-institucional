import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-medias-float',
  templateUrl: './medias-float.component.html',
  styleUrl: './medias-float.component.scss',
})
export class MediasFloatComponent implements OnInit {
  public showMessage: boolean = false;

  public isScrolled = false;

  ngOnInit(): void {
    this.showMessage = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  // Função para exibir a mensagem quando o mouse passa sobre o botão
  showMessageBox(): void {
    this.showMessage = true;
  }

  // Se quiser ocultar a mensagem após remover o mouse, pode adicionar um método opcional
  hideMessageBox(): void {
    this.showMessage = false;
  }
}
