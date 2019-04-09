import { HeaderComponent } from './../headerComponent/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderComponentModule { }
