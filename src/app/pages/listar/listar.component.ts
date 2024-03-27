import { Component, OnInit } from '@angular/core';
import { ServicePaymentService } from '../../services/service-payment.service';
import { NgFor } from '@angular/common';
import { BtnIniciarComponent } from '../../components/btn-iniciar/btn-iniciar.component';
import { Payment } from '../../model/payment.interface';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
@Component({
  selector: 'app-listar',
  standalone:true,
  imports:[
    NgFor,
    BtnIniciarComponent,
    RouterLink,
    ModalComponent 
  ],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  private servicePayment: ServicePaymentService;

  constructor(servicePayment: ServicePaymentService) {
    this.servicePayment = servicePayment;
  }

  payments: Payment[] = [];

  ngOnInit(): void {
    this.servicePayment.list()
    .subscribe(payment => {
      this.payments = payment as Payment[];
    });
  }
}
