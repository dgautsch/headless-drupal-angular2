import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { APP_CONFIG, IAppConfig } from '../app.config';
import { Node } from './node';
import { Observable } from 'rxjs/Observable';
import { Logger } from 'angular2-logger/core';

@Injectable()
export class NodeService {

	constructor( @Inject(APP_CONFIG) private config: IAppConfig, private http: Http, private _logger: Logger) { }

	getNode(urlId: string): Observable<Node[]> {
		let url: string = this.config.apiEndpoint + 'node/' + urlId + '?_format=json';
		let headers = new Headers({ 'Content-Type': '*', 'Accept': 'application/json' });

		return this.http.get(url, headers)
			.map(this.extractData)
			.catch(this.handleError);
	}
	private extractData(res: Response) {
		let node = res.json();
		return node || {};
	}
	private handleError(error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
