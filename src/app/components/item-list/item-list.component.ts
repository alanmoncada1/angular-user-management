import { Component, Input, OnInit } from '@angular/core';
import { PersonInterface } from 'src/interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  
  @Input() items: PersonInterface[] = [] as PersonInterface[];


  onDestroyItem(item: PersonInterface): void {
    this.items.splice(this.items.indexOf(item), 1);
  }

  onEditItem(item: PersonInterface): void {
    console.log(item);
  }
}
