import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { APP_CONFIG, AppConfig } from './app.config';

import { AppComponent }  from './app.component';
import { Logger } from 'angular2-logger/core';
import { LOG_LOGGER_PROVIDERS } from 'angular2-logger/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { NodeComponent } from './node/node.component';
import { NotFoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [
	{ path: ':id', component: NodeComponent },
	{ path: 'node/:id', component: NodeComponent },
	{ path: '', component: NodeComponent },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		HttpModule,
		JsonpModule,
	],
	declarations: [AppComponent, NavigationComponent, NodeComponent, NotFoundComponent],
	bootstrap: [AppComponent],
	providers: [LOG_LOGGER_PROVIDERS, { provide: APP_CONFIG, useValue: AppConfig }]
})
export class AppModule { }
