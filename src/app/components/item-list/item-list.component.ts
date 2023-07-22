import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonInterface } from 'src/interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  @Input() items: PersonInterface[] = [] as PersonInterface[];
  @Output() editItem = new EventEmitter<any>();

  onDestroyItem(item: PersonInterface): void {
    this.items.splice(this.items.indexOf(item), 1);
  }

  onEditItem(item: PersonInterface): void {
    console.log(item);
  }
}
