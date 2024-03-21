import { Artist } from './../../models/itunes-search-response.model';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ItunesService } from '../../providers/itunes.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ItunesSearchResponse } from '../../models/itunes-search-response.model';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  providers: [ItunesService],

  templateUrl: './artists.component.html',
  styleUrl: './artists.component.sass',
})
export class ArtistsComponent {
  itunesService: ItunesService = inject(ItunesService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  listOfArtists: any = signal([]);
  searchControl: FormControl = new FormControl();

  onClickSearchSong(): void {
    this.itunesService
      .getSongsBySearchString(this.searchControl.value)
      .subscribe((response: ItunesSearchResponse) => {
        this.listOfArtists.set(response.results);
      });
  }

  onClickArtist({ artistId, artistName }: Artist) {
    this.router.navigate([artistId], {
      relativeTo: this.activatedRoute,
      queryParams: {
        artistName,
      },
    });
  }
}
