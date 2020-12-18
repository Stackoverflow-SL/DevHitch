import {Component, OnInit} from '@angular/core';
import {Event} from 'src/app/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor() {
    this.events = [
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
  }

  ngOnInit(): void {
  }
}
