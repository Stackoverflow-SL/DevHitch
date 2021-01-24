import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Event } from 'src/app/models/event.model';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor(public eventService: EventsService) {
  }

  ngOnInit(): void {
    this.eventService.getAllEventsData().subscribe((allEventData: Event[]) => {
      this.events = allEventData;

    }, error => {
      console.log(error)
    });
  }
}
