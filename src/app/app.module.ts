import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SlidesComponent } from './ui/slides';
import { SlideComponent } from './ui/slide';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SlidesComponent,
		SlideComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		RouterModule,
		MatTooltipModule,
		MatIconModule

	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
