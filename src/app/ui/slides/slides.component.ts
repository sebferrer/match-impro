import { Component, OnInit } from '@angular/core';
// import * as TECHNOS_JSON from 'src/app/infra/static-technos.json';

const SLIDES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

@Component({
	selector: 'app-slides',
	templateUrl: './slides.component.html',
	styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
	slides: string[];
	size: number;
	currentSlideIndex: number;
	currentSlide: string;

	constructor() {
		this.size = 7;
	}

	public ngOnInit(): void {
		this.slides = this.shuffleArray(SLIDES)
		this.currentSlideIndex = 0;
		this.currentSlide = this.slides[0];
	}

	public changeSlide(event: any, direction: boolean): void {
		event.preventDefault()
		if(direction) {
			if(this.currentSlideIndex == this.size-1) {
				return
			}
			this.currentSlideIndex++;
		} else {
			if(this.currentSlideIndex == 0) {
				return
			}
			this.currentSlideIndex--;
		}
		this.currentSlide = this.slides[this.currentSlideIndex];
	}

	private shuffleArray(array: any): string[] {
		const newArray = [...array];
		for (var i = newArray.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = newArray[i];
			newArray[i] = newArray[j];
			newArray[j] = temp;
		}
		return newArray.slice(0, 7);
	}
}
