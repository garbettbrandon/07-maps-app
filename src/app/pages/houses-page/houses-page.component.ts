import { Component } from '@angular/core';

interface HouseProperty {
  id: string;
  name: string;
  description: string;
  price: number;
  lngLat: { lng: number; lat: number };
  tags: string[];
}

@Component({
  selector: 'app-houses-page',
  imports: [],
  templateUrl: './houses-page.component.html',
})
export class HousesPageComponent {}
