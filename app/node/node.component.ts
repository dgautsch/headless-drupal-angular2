import { Component, OnInit } from '@angular/core';
import { Node } from './node';
import { NodeService } from './node.service';
import { Logger } from 'angular2-logger/core';


@Component({
	selector: 'node',
	templateUrl: '/app/node/node.template.html',
	providers: [ NodeService ]
})

export class NodeComponent implements OnInit {
	node: Node[];

	constructor( private nodeService: NodeService, private _logger: Logger ) { }

	getNode(): void {
		this.nodeService.getNode().subscribe(
			node => this.node = node
		);
	}

	ngOnInit(): void {
		this.getNode();
	}

}
