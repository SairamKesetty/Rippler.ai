import { Component } from '@angular/core';
import { IShoppingItem } from './models/shopping.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rippler';
  shoppingList: IShoppingItem[] = [
    {
      imageURL: '../assets/Image-Master.png',
      price: 129.99,
      brand: "Burberry",
      name: "Flowy Dress with pink and gold",
      size: 4,
      rentalPrice: 12
    },
    {
      imageURL: '../assets/Image-Master-2.png',
      price: 129.99,
      brand: "Prada",
      name: "Beach dress",
      size: 8,
      rentalPrice: 12
    },
    {
      imageURL: '../assets/Image-Master-1.png',
      price: 129.99,
      brand: "Bhandage",
      name: "Red dress for evening wear",
      size: 12,
      rentalPrice: 12
    },
    {
      imageURL: '../assets/Image-Master-3.png',
      price: 129.99,
      brand: "Prada",
      name: "Wedding guest",
      size: 12,
      rentalPrice: 12
    },
    {
      imageURL: '../assets/Image-Master-4.png',
      price: 129.99,
      brand: "Ansells",
      name: "Nightwear",
      size: 14,
      rentalPrice: 12
    },
    {
      imageURL: '../assets/Image-Master-5.png',
      price: 129.99,
      brand: "Desacada",
      name: "Summer dress",
      size: 8,
      rentalPrice: 12
    }
  ]
}
