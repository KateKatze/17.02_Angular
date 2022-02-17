import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { MaininfoComponent } from './maininfo/maininfo.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [{
  path: "", component: MaininfoComponent
},{
  path: "contact" , component: ContactComponent
},{
  path: "about", component: AboutPageComponent
}, {path:'country-list', component: CountryListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
