import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '/src/styles/responsive.scss'],
})

export class HeaderComponent {
  @ViewChild('sidebar') sidebar?: Sidebar;
  public isScrolled = false;
  public areasDeAtuacaoMenu: MenuItem[] = [];

  public visibleSidebar: boolean = false;
  public isMenuOpen: boolean = false;

  constructor(
    public router: Router,
    private el: ElementRef, 
    private renderer: Renderer2
  ) {
    this.areasDeAtuacaoMenu = [
      {
        label: 'Página inicial',
        command: () => {
          this.router.navigate(['/']);
        },
      },
      {
        label: 'Sobre nós',
        command: () => {
          this.router.navigate(['/sobre']);
        },
      },
      {
        label: 'Áreas de atuação',
        items: [
          {
            label: 'Direito da Familia e Sucessões',

          },
          {
            label: 'Direito Imobiliário',
          },
          {
            label: 'Direito Bancário',
          },
          {
            label: 'Direito Previdênciario',
          },
          {
            label: 'Direito Trabalhista',
          }
        ],
        command: () => {
          this.router.navigate(['/servicos']);
        },
      },
      {
        label: 'Notícias',
        command: () => {
          this.router.navigate(['/noticias']);
        },
      },
      {
        label: 'Contato',
        command: () => {
          this.router.navigate(['/contato']);
        },
      }
    ];

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  toggleSidebar() {
    this.visibleSidebar = !this.visibleSidebar;
    this.isMenuOpen = this.visibleSidebar;
  }

  onSidebarHide() {
    this.isMenuOpen = false;
  }

}