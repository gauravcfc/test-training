import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ArtistDescComponent } from './pages/artist-desc/artist-desc.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'artists',
        component: ArtistsComponent,
      },
      {
        path: 'artists/:id',
        component: ArtistDescComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/overview',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];
