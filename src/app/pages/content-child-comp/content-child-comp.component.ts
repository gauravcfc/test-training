import { CommonModule } from '@angular/common';
import { ItunesService } from './../../providers/itunes.service';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-content-child-comp',
  standalone: true,
  imports: [CommonModule],
  providers: [ItunesService],
  templateUrl: './content-child-comp.component.html',
  styleUrl: './content-child-comp.component.sass',
})
export class ContentChildCompComponent implements OnInit {
  itunesService: ItunesService = inject(ItunesService);

  var1!: any;

  ngOnInit(): void {
    this.var1 = this.itunesService.getCalNum();
  }
}
