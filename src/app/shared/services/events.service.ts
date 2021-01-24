import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Event } from './../../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public baseUrl: string;
  public apiPath: string;
  public fullUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.apiPath = environment.eventApiPath;
    this.fullUrl = `${this.baseUrl}/${this.apiPath}`;
    console.log(this.fullUrl);
  }


  /**
 * Returns all event data
 */
  public getAllEventsData(): Observable<Event[]> {
    const url = `${this.fullUrl}`;
    return Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(events);
      }, 1000);
    });
  }
}


export const events: Event[] = [
  new Event(
    '1',
    'GoLang Sri Lanka - June',
    'Mon, Jun 29, 4:50 PM',
    'https://secure-content.meetupstatic.com/images/classic-events/491000108/375x210.jpg',
    'GoLang Sri Lanka Community',
    [],
    'Online'
  ),
  new Event(
    '2',
    'Power BI Community: #002',
    'Tue, Jun 30, 5:00 PM',
    'https://secure-content.meetupstatic.com/images/classic-events/491024724/500x280.jpg',
    'Sri Lankan Power BI Community',
    [],
    'Online'
  ),

  new Event(
    '3',
    'Flutter Layout`s Design Secrets',
    'Tue, Jun 30, 5:00 PM',
    'https://secure-content.meetupstatic.com/images/classic-events/490906389/500x280.jpg',
    'Colombo Flutter Community',
    [],
    'Online'
  ),
  new Event(
    '4',
    'Scaffolding for a React Application',
    'Tue, Jun 30, 5:00 PM',
    'https://secure-content.meetupstatic.com/images/classic-events/490705895/500x280.jpg',
    'Colombo React Native Meetup Group',
    [],
    'Online'
  ),
];
