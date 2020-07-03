import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User(
      'U001',
      'Chamod Perera',
      'hcsperera@gmail.com',
      'https://avatars1.githubusercontent.com/u/19349315?s=460&u=0c5e235d9529fccdbfb37a31ed69655a6cd8dbb0&v=4',
      'Horana',
      null,
      'GCE'
    );
  }

  ngOnInit(): void {}
}
