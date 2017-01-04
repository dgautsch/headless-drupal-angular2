import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
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
	imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
	declarations: [ AppComponent, NavigationComponent, NodeComponent, NotFoundComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
