import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';
import { BlogService } from './blog.service';
import { Logger } from 'angular2-logger/core';


@Component({
	selector: 'blog',
	templateUrl: '/app/blog/blog.template.html',
	providers: [ BlogService ]
})

export class BlogComponent implements OnInit {
	blog: Blog[];

	constructor( private blogService: BlogService, private _logger: Logger ) { }

	getBlog() {
		this.blogService.getBlog().subscribe(
			blog => this.blog = blog
		);
	}

	ngOnInit(): void {
		this.getBlog();
	}

}
