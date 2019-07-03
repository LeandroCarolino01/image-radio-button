import { Component } from '@angular/core';

import { Item } from '../app/item';
import { ITEMS } from '../app/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  radioSelected: string;
  itemSelected: Item;
  itemsList: Item[] = ITEMS;

  constructor() {
    this.radioSelected = this.itemsList[0].img;
    this.getSelecteditem(this.itemsList[0]);
  }

  getSelecteditem(item: Item): void {
    this.itemSelected = item;
  }
}
