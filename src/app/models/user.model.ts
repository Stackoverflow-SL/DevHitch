import { Group } from './group.model';
export class User {
  id: String;
  name: String;
  email: String;
  image: String;
  type: String;
  joinedGroups: Group[];

  constructor(
    id: String,
    name: String,
    email: String,
    image: String,
    type: String,
    joinedGroups: Group[]
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
    this.type = type;
    this.joinedGroups = joinedGroups;
  }
}
