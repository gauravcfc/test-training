import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { ContentChildCompComponent } from '../content-child-comp/content-child-comp.component';
import { ItunesService } from '../../providers/itunes.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ContentChildCompComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent
  implements OnChanges, OnInit, AfterViewInit, AfterContentInit
{
  @Input() helperText: string = '';
  @Input() calNumber: number = 0;
  @Input() unit: string = '';
  @Input() symbol: string = '';
  @Input() backgroundColor!: string;

  @ViewChild('ref2') buttonRef!: ElementRef<HTMLButtonElement>;

  @ContentChildren(ContentChildCompComponent) bgRef =
    new QueryList<ElementRef>();

  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  myservice: ItunesService = inject(ItunesService);

  varFromService: string = this.myservice.var1;

  clickedACardButton(): void {
    this.calNumber = this.calNumber + 1;
    this.myservice.setCalNum(this.calNumber);

    this.buttonClick.emit('Card button Clicked');
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.buttonRef.nativeElement.classList.add('text-red-900');
  }

  ngAfterContentInit(): void {
    // this.bgRef.toArray().forEach((element: any) => {
    //   element.nativeElement.classList.add('text-red-900');
    // });
  }
}
