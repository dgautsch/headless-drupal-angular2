import { Navigation } from './navigation';
export const NAVIGATION: Navigation[] = [
	{
		"link": {
			"weight": "0",
			"title": "Home",
			"description": "",
			"menu_name": "main",
			"provider": "standard",
			"parent": "",
			"enabled": true,
			"expanded": false,
			"resettable": false,
			"translatable": false,
			"deletable": false,
			"route_name": "<front>",
			"route_parameters": [],
			"url": "/",
			"options": [],
			"meta_data": [],
			"delete_route": null,
			"edit_route": null
		},
		"has_children": false,
		"depth": 1,
		"in_active_trail": false,
		"subtree": [],
		"count": 1
	},
	{
		"link": {
			"weight": "2",
			"title": "About Us",
			"description": null,
			"menu_name": "main",
			"provider": "menu_link_content",
			"parent": "",
			"enabled": true,
			"expanded": false,
			"resettable": false,
			"translatable": false,
			"deletable": true,
			"route_name": "entity.node.canonical",
			"route_parameters": {
				"node": "3"
			},
			"url": "/node/3",
			"options": [],
			"meta_data": {
				"entity_id": "1"
			},
			"delete_route": {},
			"edit_route": {}
		},
		"has_children": false,
		"depth": 1,
		"in_active_trail": false,
		"subtree": [],
		"count": 1
	},
	{
		"link": {
			"weight": "5",
			"title": "Careers",
			"description": null,
			"menu_name": "main",
			"provider": "menu_link_content",
			"parent": "",
			"enabled": true,
			"expanded": false,
			"resettable": false,
			"translatable": false,
			"deletable": true,
			"route_name": "entity.node.canonical",
			"route_parameters": {
				"node": "4"
			},
			"url": "/node/4",
			"options": [],
			"meta_data": {
				"entity_id": "2"
			},
			"delete_route": {},
			"edit_route": {}
		},
		"has_children": false,
		"depth": 1,
		"in_active_trail": false,
		"subtree": [],
		"count": 1
	}
];
