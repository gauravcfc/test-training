import { ItunesService } from './../../providers/itunes.service';
import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  Signal,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ContentChildCompComponent } from '../content-child-comp/content-child-comp.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  Artist,
  ItunesSearchResponse,
} from '../../models/itunes-search-response.model';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    HighlightDirective,
    ContentChildCompComponent,
    ReactiveFormsModule,
  ],
  providers: [ItunesService],
  templateUrl: './body.component.html',
  styleUrl: './body.component.sass',
})
export class BodyComponent implements OnInit, OnChanges, DoCheck {
  name: string = 'Fabian';
  valToTest: boolean = true;
  calNumberHardCoded = 100;
  searchTerm: FormControl = new FormControl();

  swutchCheckTest: ItemStatus = ItemStatus.PROPOSAL;
  itemStatus = ItemStatus;

  searchControl: FormControl = new FormControl();

  listOfArtists: any = signal([]);

  dataSource = [
    {
      helperText: '1',
      calNumber: 100,
      unit: 'cal',
      backgroundColor: 'bg-purple-100',
      symbol: 'C',
    },

    {
      helperText: '2',
      calNumber: 200,
      unit: 'km',
      backgroundColor: 'bg-blue-100',
      symbol: 'B',
    },
    {
      helperText: '3',
      calNumber: 300,
      unit: 'mph',
      backgroundColor: 'bg-green-100',
      symbol: 'A',
    },
  ];

  itunesService: ItunesService = inject(ItunesService);
  varFromService = this.itunesService.getCalNum();

  constructor() {
    this.varFromService = this.itunesService.getCalNum();
  }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  ngDoCheck(): void {}

  childCompButtonClicked(someText: string): void {
    this.name = someText;
  }

  listenToThisClick(): void {
    this.calNumberHardCoded = this.calNumberHardCoded + 1;
  }

  onClickSearchSong(): void {
    this.itunesService
      .getSongsBySearchString(this.searchControl.value)
      .subscribe((response: ItunesSearchResponse) => {
        console.log('resp', response);

        this.listOfArtists.set(response.results as Artist[]);
      });
  }
}

export enum ItemStatus {
  CREATED = 'CREATED',
  RESERVED = 'RESERVED',
  FAILED = 'FAILED',
  PAID = 'PAID',
  UNSOLD = 'UNSOLD',
  SOLD = 'SOLD',
  READY_FOR_CHECKOUT = 'READY_FOR_CHECKOUT',
  RESERVED_UPDATED = 'RESERVED_UPDATED',
  PAYMENT_PENDING = 'PAYMENT_PENDING',
  UNPAID = 'UNPAID',
  PROPOSAL = 'PROPOSAL',
  PROPOSAL_REJECTED = 'PROPOSAL_REJECTED',
  ARCHIVED = 'ARCHIVED',
}

interface rest1 {
  artistId: string;
}
