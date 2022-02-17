import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { MaininfoComponent } from './maininfo/maininfo.component';

const routes: Routes = [{
  path: "", component: MaininfoComponent
},{
  path: "contact" , component: ContactComponent
},{
  path: "about", component: AboutPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
