import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BodyComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
