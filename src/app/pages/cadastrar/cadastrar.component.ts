import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnIniciarComponent } from '../../components/btn-iniciar/btn-iniciar.component';
import { Router, RouterLink } from '@angular/router';
import { ServicePaymentService } from '../../services/service-payment.service';

@Component({
  selector: 'app-cadastrar',
  standalone:true,
  imports:[
    BtnIniciarComponent
    ,ReactiveFormsModule,
    RouterLink],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  paymentForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private paymentService: ServicePaymentService, 
    private router: Router
  ) {
    this.paymentForm = this.fb.group({
      idProduct: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
      value: ['', [Validators.required]],
      paymentMethod: [''],
      status: ['']
    });
  }
  createForm() {
    const payment = this.paymentForm.value;
    this.paymentService.create(payment)
    .subscribe(() => {
      this.router.navigate(['listar']);
    });
  }
}
