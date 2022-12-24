import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInterceptorProvider } from './app.interceptor';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { CoreModule } from './core/core.module';
import { AuthActivate } from './shared/guards/auth.activate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    BookModule,
    BrowserAnimationsModule,
  ],
  providers: [appInterceptorProvider, AuthActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
