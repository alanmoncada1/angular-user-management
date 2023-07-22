import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonInterface } from 'src/interface';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})

// TODO: CONNTINUE WITH THE MODAL IMPL
export class PersonItemComponent {

  @Input() person: PersonInterface = {} as PersonInterface;

  @Output() onDestroyPerson = new EventEmitter<PersonInterface>();
  @Output() onEditPerson = new EventEmitter<any>();

  destroyPerson(person: PersonInterface): void {
    this.onDestroyPerson.emit(this.person);
  }

  editPerson(): void {
    this.onEditPerson.emit();
  }
}
