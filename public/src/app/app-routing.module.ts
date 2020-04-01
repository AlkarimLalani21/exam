import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/new', component: CreateComponent},
  {path: 'restaurants/update/:id', component:UpdateComponent},
  {path: 'restaurants/reviews/:id', component:ReviewsComponent},
  { path: '**', redirectTo: '/restaurants' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }