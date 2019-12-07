import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-empanada-cart',
  templateUrl: './empanada-cart.page.html',
  styleUrls: ['./empanada-cart.page.scss'],
})
export class EmpanadaCartPage implements OnInit {

  total: number;

  public items: Array<{
    _id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
    icon: string;
  }> = [];

  public delivery: any = {
    address: "",
    payment: "1"
  }

  constructor(public router: Router,
    public alertController: AlertController,
    public apiService: ApiService,
    public cartService: CartService) {

    this.getData();
    this.totalAmount();
  }

  delete(id: string) {
    this.cartService.delete(id);
    this.getData();
    this.totalAmount();
  }

  buy() {
    this.apiService.orderEmpanadas(this.delivery, this.items).subscribe(() => {
      this.cartService.clean();
      this.presentAlert();
      this.router.navigate(['list']);
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Compra realizada',
      message: 'Su compra fue realizada exitosamente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  getData() {
    this.items = this.cartService.get();
  }

  totalAmount() {
    this.total = 0;
    this.items.forEach(item => {
      this.total += item.price * item.quantity
    });
  }

  ngOnInit() {

  }

}
