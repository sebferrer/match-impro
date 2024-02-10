import { Component, OnInit } from '@angular/core';

const SLIDES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
	'11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
	'21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
	'31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
	'41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
	'51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
	'61', '62', '63', '64'];

@Component({
	selector: 'app-slides',
	templateUrl: './slides.component.html',
	styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
	slidesBank: string[];
	slides: string[];
	size: number;
	currentSlideIndex: number;
	currentSlide: string;

	constructor() {
		this.size = 7;
	}

	public ngOnInit(): void {
		this.slidesBank = [...SLIDES];
		this.initSlides();
	}

	public initSlides(): void {
		this.slides = this.shuffleArray(this.slidesBank)
		this.currentSlideIndex = 0;
		this.currentSlide = '0';
		this.slidesBank = this.slidesBank.filter(n => !this.slides.includes(n));
	}

	public enoughSlides(): boolean {
		return this.slidesBank.length >= 7;
	}

	public changeSlide(event: any, direction: boolean): void {
		if (event != null) {
			event.preventDefault()
		}
		if (direction) {
			if (this.currentSlideIndex == this.size) {
				return
			}
			this.currentSlideIndex++;
		} else {
			if (this.currentSlideIndex == 0) {
				return
			}
			this.currentSlideIndex--;
		}
		if (this.currentSlideIndex === 0) {
			this.currentSlide = '0';
			return
		}
		this.currentSlide = this.slides[this.currentSlideIndex - 1];
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
