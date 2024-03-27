import { Component, OnInit } from '@angular/core';
import { ServicePaymentService } from '../../services/service-payment.service';
import { NgFor } from '@angular/common';
import { BtnIniciarComponent } from '../../components/btn-iniciar/btn-iniciar.component';
import { Payment } from '../../model/payment.interface';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  private modalService: NgbModal;

  constructor(servicePayment: ServicePaymentService,modalService: NgbModal) {
    this.servicePayment = servicePayment;
    this.modalService=modalService;
  }

  payments: Payment[] = [];

  ngOnInit(): void {
    this.servicePayment.list()
    .subscribe(payment => {
      this.payments = payment as Payment[];
    });
  }

  open(id: string) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.id = id;
  }
  
}
