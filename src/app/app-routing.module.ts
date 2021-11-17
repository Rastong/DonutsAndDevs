import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { DonutsComponent } from './donuts/donuts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:'donut', component: DonutsComponent},
  {path:'donut/:id', component: DonutDetailsComponent},
  {path:'person', component: PersonComponent},
  {path: '', redirectTo: '/donut', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
