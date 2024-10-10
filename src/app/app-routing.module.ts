import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { ContactComponent } from './features/contact/contact.component';
import { BlogComponent } from './features/blog/blog.component';
import { LoaderComponent } from './components/loader/loader.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, title: 'Vandelson Junior Advogados - Início' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  
  { path: 'sobre', component: AboutComponent, title: 'Sobre nós' },
  { path: 'servicos', component: ServicesComponent, title: 'Áreas de atuação' },
  { path: 'noticias', component: BlogComponent, title: 'Notícias' },
  { path: 'contato', component: ContactComponent, title: 'Contato' },
  { path: 'carregando', component: LoaderComponent, title: 'Vandelson Junior Advogados' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}