import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  dummyData = [
    {
      dateTime: 'Mon, Jun 29, 4:50 PM',
      title: 'GoLang Sri Lanka - June',
      image: 'https://secure-content.meetupstatic.com/images/classic-events/491000108/375x210.jpg',
      organizer: 'GoLang Sri Lanka Community',
      participants: 12,
      type: 'Online'
    },
    {
      dateTime: 'Tue, Jun 30, 5:00 PM',
      title: 'Power BI Community: #002',
      image: 'https://secure-content.meetupstatic.com/images/classic-events/491024724/500x280.jpg',
      organizer: 'Sri Lankan Power BI Community',
      participants: 30,
      type: 'Online'
    },
    {
      dateTime: 'Tue, Jun 30, 5:00 PM',
      title: 'Flutter Layout`s Design Secrets',
      image: 'https://secure-content.meetupstatic.com/images/classic-events/490906389/500x280.jpg',
      organizer: 'Colombo Flutter Community',
      participants: 19,
      type: 'Online'
    },
    {
      dateTime: 'Tue, Jun 30, 5:00 PM',
      title: 'Scaffolding for a React Application',
      image: 'https://secure-content.meetupstatic.com/images/classic-events/490705895/500x280.jpg',
      organizer: 'Colombo React Native Meetup Group',
      participants: 39,
      type: 'Online'
    }
  ];

  ngOnInit(): void {
  }

}
