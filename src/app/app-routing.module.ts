import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home';
import { SlidesComponent } from './ui/slides';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'slides',
		component: SlidesComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
