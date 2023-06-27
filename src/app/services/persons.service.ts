import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonInterface } from 'src/interface';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {

  personsData = [
    {name: 'Alan Moncada'}, 
    {name: 'Ana Guevara'}, 
    {name: 'Carmen Salinas'}
  ];

  constructor() { }

  // Using promises
    // async getPersons(personId?: number): Promise<PersonInterface[]> {
    //   return Promise.resolve(this.personsData).then(person => person);
    // }

  // Using RxJS
  getPersons(personId?: number): Observable<PersonInterface[]> {
    // Simulate an asyncronous operation
    return of(this.personsData)
  }
}
