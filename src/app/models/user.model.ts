export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  location: string;
  joinedGroups: string[];
  bio: string;

  constructor(id: string, firstName: string, lastName: string, email: string, password: string, image: string, location: string, joinedGroups: string[], bio: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.image = image;
    this.location = location;
    this.joinedGroups = joinedGroups;
    this.bio = bio;
  }
}
