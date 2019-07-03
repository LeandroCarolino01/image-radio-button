import { Component } from '@angular/core';

import { Item } from '../app/item';
import { ITEMS } from '../app/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  radioSel: any;
  radioSelected: string;
  itemSelected: Item;
  itemsList: Item[] = ITEMS;

  constructor() {
    this.itemsList = ITEMS;
    this.radioSelected = this.itemsList[0].img;
    this.getSelecteditem();
  }

  getSelecteditem() {
    this.itemSelected = ITEMS.find(i => i.img === this.radioSelected);
  }

  onItemChange(item: Item): void {
    this.itemSelected = item;
  }
}
