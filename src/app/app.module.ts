import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		RouterModule,
		MatTooltipModule,
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
