import { Component, OnInit } from '@angular/core';
import { PersonInterface } from 'src/interface';
import { PersonsService } from './services/persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private personsService: PersonsService) {}
  
  persons: PersonInterface[] = [];

  person: PersonInterface = { name: "" };

  async ngOnInit() {
      // Using promises
      // this.persons = await this.personsService.getPersons();
      // Using RxJS
      this.personsService.getPersons().subscribe(persons => this.persons = persons);
  }

  onSavePerson(): void {
    this.persons.push(this.person);

    this.person = {} as PersonInterface;
  }

 
}