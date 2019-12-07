import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs'; ////Libreria de JS que se fundamenta en RX
import { retry, catchError } from 'rxjs/operators'; ////Libreria de JS que se fundamenta en RX

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseApi = 'http://shoppingproducts.herokuapp.com'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('Error calling the Api');
  }

  public getEmpanadas(): Observable<any> {
    console.log("getEmpanadas(): Observable<any>");
    return this.http.get(`${this.baseApi}/products`).pipe(
      retry(2), catchError(this.handleError)
    )
  }

  private order: any = {
    address: "",
    payment: "",
    status: 1,
    listProducts: []
  }

  public orderEmpanadas(delivery: any, items: any): Observable<any> {

    this.order.address = delivery.address;
    this.order.payment = delivery.payment;
    this.order.listProducts = items;

    console.log(this.order);
    /*
        {
          "address":"calle 1",
          "payment": "efectivo",
          "status":1,
          "listProducts": [{
              "_id":"58e935cfe8beae2be8b36b9d",
              "quantity":2,
              "name": "atta"
          },
          {
              "_id":"58e940fb7fc4e31bd041ec00",
              "quantity":1
          }]
        }
        */



    return this.http.post(
      `${`${this.baseApi}/order`}`,
      JSON.stringify(this.order),
      this.httpOptions)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }

  /*
    public deleteEmpanada(id: string): Observable<any> {
      return this.http.delete(
        `${this.baseApi}/${id}`,
        this.httpOptions)
        .pipe(
          retry(2), catchError(this.handleError)
        )
    }
  
    public createEmpanada(item: Empanada): Observable<any> {
      return this.http.post(
        `${this.baseApi}`,
        JSON.stringify(item),
        this.httpOptions)
        .pipe(
          retry(2), catchError(this.handleError)
        )
    }
  
    public editEmpanada(item: Empanada): Observable<any> {
      return this.http.put(
        `${this.baseApi}`,
        JSON.stringify(item),
        this.httpOptions)
        .pipe(
          retry(2), catchError(this.handleError)
        )
    }
    */
}
