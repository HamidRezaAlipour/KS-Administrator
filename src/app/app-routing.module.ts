import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuMainPageComponent } from './menu-manager/menu-main-page/menu-main-page.component';
import { AccessSectionComponent } from './access-policy/access-section/access-section.component';
import { AccessManagerComponent } from './access-policy/access-manager/access-manager.component';

const routes: Routes = [
  {path: 'MenuManager' , component: MenuMainPageComponent} ,
  {path: 'AccessSection' , component: AccessSectionComponent} ,
  {path: 'AccessPolicy' , component: AccessManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
