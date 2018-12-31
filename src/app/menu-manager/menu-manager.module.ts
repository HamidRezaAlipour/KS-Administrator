import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    ButtonsModule, GridModule,
    RouterModule,
    CommonModule
  ]
})
export class MenuManagerModule { }
