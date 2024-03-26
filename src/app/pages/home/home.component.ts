import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BtnIniciarComponent } from '../../components/btn-iniciar/btn-iniciar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  NgOptimizedImage,
  BtnIniciarComponent,
  RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
