import { Injectable } from '@angular/core';

import { Navigation } from './navigation';
import { NAVIGATION } from './mock-navigation';

@Injectable()
export class NavigationService {
	getNavigation(): Promise <Navigation[]> {
		return Promise.resolve(NAVIGATION);
	}
}
