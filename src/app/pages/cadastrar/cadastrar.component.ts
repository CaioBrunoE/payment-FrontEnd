import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnIniciarComponent } from '../../components/btn-iniciar/btn-iniciar.component';

@Component({
  selector: 'app-cadastrar',
  standalone:true,
  imports:[
    BtnIniciarComponent
    ,ReactiveFormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      idProduct: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
      value: ['', [Validators.required]],
      paymentMethod: [''],
      status: ['']
    });
  }
  createForm() {
    console.log(this.paymentForm.value);
  }
}
