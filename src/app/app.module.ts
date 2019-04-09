import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MenuModule} from 'primeng/menu';

import {AccordionModule} from 'primeng/accordion';
import {MegaMenuModule} from 'primeng/megamenu';
import {PanelMenuModule, TabMenuModule, RadioButtonModule} from 'primeng/primeng';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar'


  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    AccordionModule,
    MegaMenuModule,
    TabMenuModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    PanelModule,
    CardModule,
    ButtonModule,
    RadioButtonModule,
    ButtonModule,
    MenubarModule,
    SidebarModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
