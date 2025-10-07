import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class ErrorPage {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
