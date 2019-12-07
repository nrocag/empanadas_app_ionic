import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  public items: Array<{
    _id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
    icon: string;
  }> = [];

  constructor(public apiService: ApiService, public router: Router) {
    this.getData();
  }

  addCart(item: any) {
    this.router.navigate(['empanada-detail',
      {
        _id: item._id,
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        price: item.price,
        image: item.image
      }]);
  }

  getData() {
    this.apiService.getEmpanadas().subscribe(response => {
      this.items = response;
    });

    for (let i = 1; i <= this.items.length; i++) {
      this.items[i - 1].icon = this.icons[Math.floor(Math.random() * this.icons.length)]
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
