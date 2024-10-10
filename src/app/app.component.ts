import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss', '../styles/responsive.scss']
})
export class AppComponent implements OnInit {
  public isScrolled = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const isFirstVisit = localStorage.getItem('firstVisit');

    if (!isFirstVisit) {
      this.router.navigate(['/carregando']);
      localStorage.setItem('firstVisit', 'true'); 
    }
  }

  hideHeader(): boolean {
    return this.router.url !== '/carregando';
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
}
