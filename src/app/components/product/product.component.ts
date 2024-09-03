import {Component, EventEmitter, Input, OnInit, Output, LOCALE_ID} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';

registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru-RU'
  }]
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      quantity: '',
      price: ''
    }
  }

  ngOnInit(): void {

  }

  addProductToCart() {
    this.addToCartEvent.emit(this.product);
  }

}
