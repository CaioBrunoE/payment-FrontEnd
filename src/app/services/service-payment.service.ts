import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Payment } from '../model/payment.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicePaymentService {
private http = inject(HttpClient);

list(){
  return this.http.get<Payment[]>("http://localhost:9002/api/payments")
}

getByid(id:number){
  return this.http.get<Payment>(`http://localhost:9002/api/payments/${id}`)
}

create(payment: any){
  return this.http.post<Payment>(`http://localhost:9002/api/payments`, payment)
}

update(id:string ,payment: any){
  return this.http.put<Payment>(`http://localhost:9002/api/payments/${id}`, payment)
}

delete(id:string){
  return this.http.delete<void>(`http://localhost:9002/api/payments/${id}`)
}

}
