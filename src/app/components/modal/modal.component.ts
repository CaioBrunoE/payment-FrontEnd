import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicePaymentService } from '../../services/service-payment.service';
import { BtnIniciarComponent } from '../btn-iniciar/btn-iniciar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  id: string = '';

  constructor(
    private fb: FormBuilder, 
    private paymentService: ServicePaymentService, 
    private router: Router,
    //private acrout:ActivatedRoute,
    private modalService: NgbModal
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
    const payment = this.paymentForm.value;
    //this.acroute.snapshot.paramMap.get('id')
    if(this.id){
      this.paymentService.update(this.id, payment)
      .subscribe(() => {
        this.router.navigate(['listar']);
        this.modalService.dismissAll(); 
      });
    }
  }
  
  deleteForm() {
    if(this.id !== null){
      this.paymentService.delete(this.id)
      .subscribe(() => {
        this.router.navigate(['listar']);
        this.modalService.dismissAll();
      });
      
    }
  }
  close(){
    this.modalService.dismissAll();
  }
}
