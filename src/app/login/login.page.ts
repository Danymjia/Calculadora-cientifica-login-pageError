import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  private readonly VALID_USERNAME = 'admin'; //hola 
  private readonly VALID_PASSWORD = 'admin123';

  constructor(private router: Router) {}

  login() {
    if (this.username === this.VALID_USERNAME && this.password === this.VALID_PASSWORD) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/error']);
    }
  }
}
