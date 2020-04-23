import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { ArchiveComponent } from './routing/archive/archive.component';


const routes: Routes = [

{path:'', component : HomeComponent},
{path:'archive/:year/:month', component : ArchiveComponent},
{path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
