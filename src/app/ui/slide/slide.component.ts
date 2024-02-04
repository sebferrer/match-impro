import { Component, OnInit, Input } from '@angular/core';
// import * as TECHNOS_JSON from 'src/app/infra/static-technos.json';

@Component({
	selector: 'app-slide',
	templateUrl: './slide.component.html',
	styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
	@Input()
	id: string;

	constructor() {
	}

	public ngOnInit(): void {

	}
}
