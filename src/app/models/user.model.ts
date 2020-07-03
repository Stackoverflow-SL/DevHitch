import { Group } from './group.model';
export class User {
  id: String;
  name: String;
  email: String;
  image: String;
  location: String;
  joinedGroups: Group[];
  bio: String;

  constructor(
    id: String,
    name: String,
    email: String,
    image: String,
    location: String,
    joinedGroups: Group[],
    bio: String
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
    this.location = location;
    this.joinedGroups = joinedGroups;
    this.bio = bio;
  }
}
