import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-artist-desc',
  standalone: true,
  imports: [],
  templateUrl: './artist-desc.component.html',
  styleUrl: './artist-desc.component.sass',
})
export class ArtistDescComponent implements OnInit {
  name = signal('');

  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log('params', params['artistName']);
      this.name.set(params['artistName']);
    });
  }
}
