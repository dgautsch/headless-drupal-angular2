import { Component, OnInit } from '@angular/core';
import { Node } from './node';
import { NodeService } from './node.service';
import { Logger } from 'angular2-logger/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'node',
	templateUrl: '/app/node/node.template.html',
	providers: [ NodeService ]
})

export class NodeComponent implements OnInit {
	node: Node[];

	constructor( private nodeService: NodeService, private _logger: Logger, private route: ActivatedRoute, ) { }

	getNode(id: string) {
		this.nodeService.getNode(id).subscribe(
			node => this.node = node
		);
	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			let id = params['id'];
			this.getNode(id);
		});

	}

}
