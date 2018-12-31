import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManuBarComponent } from './manu-bar/manu-bar.component';
import { MenuManagerModule } from './menu-manager/menu-manager.module';
import { MenuMainPageComponent } from './menu-manager/menu-main-page/menu-main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { AccessManagerComponent } from './access-policy/access-manager/access-manager.component';
import { AccessPolicyModule } from './access-policy/access-policy.module';
import { AccessSectionComponent } from './access-policy/access-section/access-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ManuBarComponent,
    MenuMainPageComponent,
    AccessManagerComponent,
    AccessSectionComponent
  ],
  imports: [
    ButtonsModule,
    MenuManagerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridModule,
    AccessPolicyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
