import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-empanada-detail',
  templateUrl: './empanada-detail.page.html',
  styleUrls: ['./empanada-detail.page.scss'],
})
export class EmpanadaDetailPage implements OnInit {
  public empanada: any = {
    _id: "",
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    image: ""
  }

  constructor(public router: ActivatedRoute,
    public navController: NavController,
    public alertController: AlertController,
    public cartService: CartService) { }

  addCart(item: any) {
    this.cartService.add(item);
    this.presentAlert();
    this.navController.back();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Agregado al carrito',
      message: 'La empanada fue agregada al carrito exitosamente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.empanada._id = params.get("_id");
      this.empanada.name = params.get("name");
      this.empanada.description = params.get("description");
      this.empanada.quantity = 1;
      this.empanada.price = params.get("price");
      this.empanada.image = params.get("image");
    });
  }

}
