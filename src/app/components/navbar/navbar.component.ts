import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnIniciarComponent } from '../btn-iniciar/btn-iniciar.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
  RouterLink,
  NgOptimizedImage,
  BtnIniciarComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
