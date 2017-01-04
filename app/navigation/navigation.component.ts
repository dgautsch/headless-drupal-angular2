import { Component, OnInit } from '@angular/core';
import { Navigation } from './navigation';
import { NavigationService } from './navigation.service';

@Component({
	selector: 'main-nav',
	templateUrl: '/app/navigation/navigation.template.html',
	providers: [NavigationService]
})
export class NavigationComponent implements OnInit {
	name = 'Think Company';
	navItems: Navigation[];

	constructor(private navigationService: NavigationService) { }

	getNav(): void {
		this.navigationService.getNavigation().then(navItems => this.navItems = navItems);
	}

	ngOnInit(): void {
		this.getNav();
	}

}
