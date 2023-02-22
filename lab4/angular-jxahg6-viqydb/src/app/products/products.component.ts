import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = products;
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('NOTIFICATION!!!!!');
  }

}
