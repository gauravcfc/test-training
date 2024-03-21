import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  router: Router = inject(Router);
  authService = inject(AuthService);

  passwordControl: FormControl = new FormControl();

  aristitsLength: number = 100;

  login(): void {
    if (this.passwordControl.value === 'pass') {
      this.authService.setAuthentication(true);
    } else {
      this.authService.setAuthentication(false);
    }

    this.router.navigate(['home']);
  }
}
