import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
