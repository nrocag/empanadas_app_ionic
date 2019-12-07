import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Array<{
    _id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
    icon: string;
  }> = [];

  constructor() { }

  public add(item: any) {
    this.items.push(item);
  }

  public delete(id: string) {
    this.items = this.items.filter(item => item._id !== id);
  }

  public get() {
    return this.items;
  }

  public clean() {
    this.items = [];
  }
}
