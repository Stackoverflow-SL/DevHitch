import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {
    this.tempEvents = [
      new Event(
        '1',
        'GoLang Sri Lanka - June',
        'Mon, Jun 29, 4:50 PM',
        'https://secure-content.meetupstatic.com/images/classic-events/491000108/375x210.jpg',
        'GoLang Sri Lanka Community',
        12,
        'Online'
      ),
      new Event(
        '2',
        'Power BI Community: #002',
        'Tue, Jun 30, 5:00 PM',
        'https://secure-content.meetupstatic.com/images/classic-events/491024724/500x280.jpg',
        'Sri Lankan Power BI Community',
        30,
        'Online'
      ),

      new Event(
        '3',
        'Flutter Layout`s Design Secrets',
        'Tue, Jun 30, 5:00 PM',
        'https://secure-content.meetupstatic.com/images/classic-events/490906389/500x280.jpg',
        'Colombo Flutter Community',
        19,
        'Online'
      ),
      new Event(
        '4',
        'Scaffolding for a React Application',
        'Tue, Jun 30, 5:00 PM',
        'https://secure-content.meetupstatic.com/images/classic-events/490705895/500x280.jpg',
        'Colombo React Native Meetup Group',
        39,
        'Online'
      ),
    ];
  }

  tempEvents: Event[];

  ngOnInit(): void {}
}
