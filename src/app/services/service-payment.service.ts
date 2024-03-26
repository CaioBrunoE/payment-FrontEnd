import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePaymentService {
private http = inject(HttpClient);

list(){
  return this.http.get("http://localhost:9002/api/payments")
}

getByid(id:number){
  return this.http.get(`http://localhost:9002/api/payments/${id}`)
}

create(payment: any){
  return this.http.post(`http://localhost:9002/api/payments/`, payment)
}

update(id:number ,payment: any){
  return this.http.put(`http://localhost:9002/api/payments/${id}`, payment)
}

delete(id:number){
  return this.http.delete(`http://localhost:9002/api/payments/${id}`)
}

}
