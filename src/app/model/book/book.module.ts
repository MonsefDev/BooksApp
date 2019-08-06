import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BookModule {
  photo:string;
  constructor(public title:string,public author:string){
    
  }   
 }
