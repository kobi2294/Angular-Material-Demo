import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { SidebarButtonComponent } from './components/navigation/sidebar-button/sidebar-button.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ItemsPageComponent } from './components/pages/items-page/items-page.component';
import { HeaderComponent } from './components/navigation/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarButtonComponent,
    HomePageComponent,
    AboutPageComponent,
    ItemsPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
