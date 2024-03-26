import { Component, OnInit } from '@angular/core';
import { ServicePaymentService } from '../../services/service-payment.service';
import { NgFor } from '@angular/common';
import { BtnIniciarComponent } from '../../components/btn-iniciar/btn-iniciar.component';

interface Payment {
  idProduct: string;
  idUser: string;
  value: number;
  paymentMethod: string;
  created: string;
  updated: string;
  status: string;
}

@Component({
  selector: 'app-listar',
  standalone:true,
  imports:[NgFor,BtnIniciarComponent],
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
      console.log(payment);
    });
  }
}
