import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { HeaderComponent } from './components/header/header.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { MediasFloatComponent } from './components/medias-float/medias-float.component';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { LoaderComponent } from './components/loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner'; 
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MediasFloatComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    ScrollTopModule,
    CardModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    CarouselModule,
    DividerModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule,
    InputTextareaModule,
    CheckboxModule,
    ProgressSpinnerModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
