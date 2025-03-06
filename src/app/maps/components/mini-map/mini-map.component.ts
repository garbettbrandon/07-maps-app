import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import { environment } from '../../../../environments/environment';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
  styles: `
    div{
      width: 100%;
      height: 260px;
    }

  `,
})
export class MiniMapComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  lnglat = input.required<{ lng: number; lat: number }>();

  zoom = input<number>(14);

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()?.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lnglat(), // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
      interactive: false,
      pitch: 30,
    });

    new mapboxgl.Marker().setLngLat(this.lnglat()).addTo(map);
  }
}
