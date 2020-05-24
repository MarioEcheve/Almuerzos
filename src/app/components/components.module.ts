import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ComponentsLayoutRoutes } from './components.routing';
import { AuthInterceptor } from 'app/configs/auth.interceptor';
import { Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsLayoutRoutes),
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    HttpModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    Title,
    {
      provide: LOCALE_ID,
      useValue: 'en',
    },
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],

  declarations: [FooterComponent, NavbarComponent, SidebarComponent, LoginComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, LoginComponent],
})
export class ComponentsModule {}
