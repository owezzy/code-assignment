import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import {AppMaterialModule} from './app-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedComponentsModule} from './shared-components.module';
import {NavigationMenuComponent} from './home/navigation-menu/navigation-menu.component';
import { ShellComponent } from './home/shell/shell.component';
import {ProgramData} from './programs/program-data';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationMenuComponent,
    ShellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    HttpClientInMemoryWebApiModule.forRoot(ProgramData),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
