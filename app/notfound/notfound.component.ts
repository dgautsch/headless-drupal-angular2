import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
	selector: 'notfound',
	providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
	templateUrl: '/app/notfound/notfound.template.html',
})

export class NotFoundComponent {
	title = 'Oops... We Couldn\'t Find What You Were Looking For';
	location: Location;
	constructor(location: Location) {

	}
	goBack() {
		console.log(location);
	}
}
