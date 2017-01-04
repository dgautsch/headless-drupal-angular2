import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

// const appRoutes: Routes = [
// 	{
// 		path: ':id',
// 		redirectTo: '/',
// 		data: { title: 'Heroes List' }
// 	},
// 	{ path: '**', data: { title: 'Not Found' } }
// ];

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ AppComponent, NavigationComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
