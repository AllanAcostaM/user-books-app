import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, LottieComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToAdd() {
    this.router.navigate(['/add']);
  }

  goToregister() {
    this.router.navigate(['/register']);
  }
}
