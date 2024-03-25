import { Artist } from './../../models/itunes-search-response.model';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ItunesService } from '../../providers/itunes.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ItunesSearchResponse } from '../../models/itunes-search-response.model';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  providers: [ItunesService],

  templateUrl: './artists.component.html',
  styleUrl: './artists.component.sass',
})
export class ArtistsComponent implements OnInit, OnDestroy {
  itunesService: ItunesService = inject(ItunesService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  listOfArtists: any = signal([]);
  searchControl: FormControl = new FormControl();

  listOfArtists$!: Observable<Artist[] | void>;

  subs!: Subscription;

  ngOnInit(): void {
    // this.onClickSearchSong();
  }

  onClickSearchSong(): void {
    this.listOfArtists$ = this.itunesService
      .getSongsBySearchString(this.searchControl.value)
      .pipe(
        // map(({ results }: ItunesSearchResponse) => {
        //   return results.map((artist: Artist) => {
        //     return {
        //       ...artist,
        //       artistName: `${artist.artistName}`,
        //     };
        //   });
        // }),
        switchMap((response: any) => {
          return this.itunesService.getSongsByArtist(
            response.results[0].artistName,
          );
        }),
        map(({ results }: ItunesSearchResponse) => results),
      );

    this.itunesService
      .getSongsBySearchString(this.searchControl.value)
      .subscribe((response: ItunesSearchResponse) => {
        console.log('response', response);

        this.getSongByOnly1Artist(response.results[0].artistName);
      });
  }

  getSongByOnly1Artist(artistName: string): void {
    this.itunesService.getSongsByArtist(artistName).subscribe((res) => {
      this.listOfArtists.set(res.results);
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

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
