import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  num1: string = '';
  num2: string = '';
  result: number | null = null;
  operation: string = '';

  constructor(private router: Router) {}

  calculate(op: string) {
    const n1 = parseFloat(this.num1);
    const n2 = parseFloat(this.num2);

    if (isNaN(n1) || isNaN(n2)) {
      this.result = null;
      return;
    }

    let calcResult: number;

    switch (op) {
      case '+':
        calcResult = n1 + n2;
        break;
      case '-':
        calcResult = n1 - n2;
        break;
      case 'x':
        calcResult = n1 * n2;
        break;
      case '/':
        calcResult = n2 !== 0 ? n1 / n2 : NaN;
        break;
      case '^':
        calcResult = Math.pow(n1, n2);
        break;
      default:
        return;
    }

    this.result = calcResult;
  }

  clear() {
    this.num1 = '';
    this.num2 = '';
    this.operation = '';
    this.result = null;
  }

  sqrt() {
    const value = parseFloat(this.num1);
    if (isNaN(value)) return;
    this.result = Math.sqrt(value);
  }

  sin() {
    const value = parseFloat(this.num1);
    if (isNaN(value)) return;
    this.result = Math.sin(value * Math.PI / 180);
  }

  cos() {
    const value = parseFloat(this.num1);
    if (isNaN(value)) return;
    this.result = Math.cos(value * Math.PI / 180);
  }

  tan() {
    const value = parseFloat(this.num1);
    if (isNaN(value)) return;
    this.result = Math.tan(value * Math.PI / 180);
  }

  log() {
    const value = parseFloat(this.num1);
    if (isNaN(value)) return;
    this.result = Math.log10(value);
  }

  ln() {
    const value = parseFloat(this.num1);
    if (isNaN(value)) return;
    this.result = Math.log(value);
  }

  pi() {
    this.result = Math.PI;
  }

  e() {
    this.result = Math.E;
  }
  
}

