import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
	apiEndpoint: string;
}

export const AppConfig: IAppConfig = {
	apiEndpoint: "http://dev-tci-site.pantheonsite.io/"
};
