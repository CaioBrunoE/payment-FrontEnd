import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicePaymentService } from '../../services/service-payment.service';
import { BtnIniciarComponent } from '../btn-iniciar/btn-iniciar.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    BtnIniciarComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  paymentForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private paymentService: ServicePaymentService, 
    private router: Router,
    private acroute: ActivatedRoute
  ) {
    this.paymentForm = this.fb.group({
      idProduct: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
      value: ['', [Validators.required]],
      paymentMethod: [''],
      status: ['']
    });
  }
  updateForm() {
    const id = this.acroute.snapshot.paramMap.get('id');
    const payment = this.paymentForm.value;
    console.log(payment, id)
    if(id){
      this.paymentService.update(id, payment)
      .subscribe(() => {
        
        this.router.navigate(['listar']);
      })
    }
  }
  deleteForm() {
    const id = this.acroute.snapshot.paramMap.get('id');
    console.log(id)
    if(id){
      this.paymentService.delete(id)
      .subscribe(() => {
        this.router.navigate(['listar']);
      })
    }
  }
}