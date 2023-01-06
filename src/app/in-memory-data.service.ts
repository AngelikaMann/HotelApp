import { importProvidersFrom, Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{

createDb()
{
  const bookings : Booking[]=[
  {
    id  : 1,
    name : "Jannick Leismann",
    roomNumber : 102,
    startDate : new Date(),
    endDate : new Date("2023-04-10")
  },

  {
    id  : 2,
    name : "Klara Schmidt",
    roomNumber : 103,
    startDate : new Date(),
    endDate : new Date("2023-05-19")
  },
  {
    id  : 3,
    name : "Maria From",
    roomNumber : 104,
    startDate : new Date(),
    endDate : new Date("2023-06-14")
  },
  {
    id  : 4,
    name : "Otto Lau",
    roomNumber : 100,
    startDate : new Date(),
    endDate : new Date("2023-07-11")
  },
  {
    id  : 5,
    name : "Max Mustermann",
    roomNumber : 101,
    startDate : new Date(),
    endDate : new Date("2023-08-08")
  }
]
return {bookings};
}

  constructor() { }
}
