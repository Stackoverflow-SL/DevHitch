import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css'],
})
export class NewGroupComponent implements OnInit {
  topics: Topic[];

  constructor() {
    this.topics = [
      new Topic('1', 'Computer Science'),
      new Topic('2', 'DevOps'),
      new Topic('3', 'Software Engineering'),
      new Topic('4', 'Beginner'),
      new Topic('5', 'IT'),
      new Topic('6', 'Computer Science')
    ];
  }

  ngOnInit(): void {}
}
