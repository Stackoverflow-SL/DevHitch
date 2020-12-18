import {Component, OnInit} from '@angular/core';
import {Group} from 'src/app/models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  isMyGroupsAvailable: boolean;
  groups: Group[];

  constructor() {
    this.isMyGroupsAvailable = true;

    this.groups = [
      new Group(
        '1',
        'Golang Sri Lanka',
        'Colombo,SL',
        '',
        [],
        'https://www.thedigitaltransformationpeople.com/wp-content/uploads/2019/03/tech-conference-networking-tips-640x400-c-default.jpg'
      ),
      new Group(
        '1',
        'Golang Sri Lanka',
        'Colombo,SL',
        '',
        [],
        'https://www.thedigitaltransformationpeople.com/wp-content/uploads/2019/03/tech-conference-networking-tips-640x400-c-default.jpg'
      ),
      new Group(
        '1',
        'Golang Sri Lanka',
        'Colombo,SL',
        '',
        [],
        'https://www.thedigitaltransformationpeople.com/wp-content/uploads/2019/03/tech-conference-networking-tips-640x400-c-default.jpg'
      ),
      new Group(
        '1',
        'Golang Sri Lanka',
        'Colombo,SL',
        '',
        [],
        'https://www.thedigitaltransformationpeople.com/wp-content/uploads/2019/03/tech-conference-networking-tips-640x400-c-default.jpg'
      ),
      new Group(
        '1',
        'Golang Sri Lanka',
        'Colombo,SL',
        '',
        [],
        'https://www.thedigitaltransformationpeople.com/wp-content/uploads/2019/03/tech-conference-networking-tips-640x400-c-default.jpg'
      ),
    ];
  }

  ngOnInit(): void {
  }
}
