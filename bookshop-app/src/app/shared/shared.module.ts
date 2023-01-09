import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    LoaderComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderComponent,
    MessageComponent
  ]
})
export class SharedModule { }
