import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
	apiEndpoint: string;
	navigationEndpoint: string;
	blogEndpoint: string;
}

export const AppConfig: IAppConfig = {
	apiEndpoint: "http://dev-tci-site.pantheonsite.io/",
	navigationEndpoint: "http://dev-tci-site.pantheonsite.io/entity/menu/main/tree?_format=json",
	blogEndpoint: "http://dev-tci-site.pantheonsite.io/blog?_format=json",
};
