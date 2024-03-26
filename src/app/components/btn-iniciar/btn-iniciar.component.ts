import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-btn-iniciar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf],
  templateUrl: './btn-iniciar.component.html',
  styleUrl: './btn-iniciar.component.css'
})
export class BtnIniciarComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean=false;
  @Input() loading: boolean=false;
  @Input() variant: BtnVariants="primary"
  @Output("submit") onSubmit = new EventEmitter();
  
  submit(){
   this.onSubmit.emit();
  }
}
