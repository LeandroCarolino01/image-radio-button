import { Component } from '@angular/core';
 
import {Item} from '../app/item';
import {ITEMS} from '../app/mock-data';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: Item[] = ITEMS;
 
    
    constructor() {
      this.itemsList = ITEMS;
      this.radioSelected = "assets/imgs/space3.jpg";
      this.getSelecteditem();
     }
 
    getSelecteditem(){
      this.radioSel = ITEMS.find(Item => Item.img === this.radioSelected);
      this.radioSelectedString = JSON.stringify(this.radioSel);
      // this.radioSelectedString = this.radioSel;
      console.log(this.radioSel);
    }
 
    onItemChange(item){
      this.getSelecteditem();
    }
 
}