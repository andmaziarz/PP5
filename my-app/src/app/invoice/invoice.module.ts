import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './components/client-form/client-form.component';



@NgModule({
  declarations: [
    ClientFormComponent
  ],
  exports: [
    ClientFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
