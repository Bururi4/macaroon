import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {

  }

  getProducts(): ProductType[] {
    return [
      {
        image: 'seatdown1.png',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: '1.70',
      },
      {
        image: 'seatdown2.png',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: '1.70',
      },
      {
        image: 'seatdown3.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: '1.70',
      },
      {
        image: 'seatdown4.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: '1.70',
      },
    ];
  }
}
