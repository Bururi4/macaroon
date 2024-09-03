import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {AddToCartService} from "./services/add-to-cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]

  products: ProductType[] = [];

  totalPrice: number = 0;

  numbers: string = '375293689868';

  formValues = {
    productName: '',
    userName: '',
    phoneNumber: '',
  }

  constructor(private productService: ProductService,
              public addToCartService: AddToCartService) {

  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  addToOrder(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productName = product.title.toUpperCase();
    this.addToCartService.count++;
    this.totalPrice += parseFloat(product.price);
    alert('"' + product.title + '"' + ' добавлен в корзину!');
  }

  createOrder() {
    if (!this.formValues.productName) {
      alert('Выберите макарун!');
      return;
    }
    if (!this.formValues.userName) {
      alert('Укажите Ваше имя!');
      return;
    }
    if (!this.formValues.phoneNumber) {
      alert('Введите номер телефона!');
      return;
    }
    alert('Спасибо за заказ!');

    this.formValues = {
      productName: '',
      userName: '',
      phoneNumber: '',
    }
  }

  showPresent: boolean = true;

  showHeaderNumber: boolean = true;

  showFooterInstagramLink: boolean = true;
}
