import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  links: string[] = [
    'The weekend break',
    'The Package Holiday',
    'The Group Tour',
    'Long Term Travel'
  ];

  destinations: Destination[] = [
    { name: 'Singapore', description: 'Singapore, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.', price: '38.800', duration: 'Approx 2 night trip', distance: 1000 },
    { name: 'Thailand', description: `Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces.`, price: '38.800', duration: 'Approx 2 night trip', distance: 1000 },
    { name: 'Paris', description: `Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.`, price: '38.800', duration: 'Approx 2 night trip', distance: 1000 },
    { name: 'New Zealand', description: 'New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmassses.', price: '38.800', duration: 'Approx 1 night trip', distance: 1000 },
    { name: 'Bora Bora', description: 'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand', price: '38.800', duration: 'Approx 2 night 2 day trip', distance: 1000 },
    { name: 'London', description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching.', price: '38.800', duration: 'Approx 2 night 2 day trip', distance: 1000 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
