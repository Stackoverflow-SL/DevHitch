export class User {
  id: String;
  name: String;
  email: String;
  image: String;
  type: String;

  constructor(
    id: String,
    name: String,
    email: String,
    image: String,
    type: String
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
    this.type = type;
  }
}
