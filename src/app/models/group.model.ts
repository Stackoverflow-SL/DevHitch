export class Group {
  id: string;
  name: string;
  location: string;
  organizer: string;
  coOrganizers: string[];
  image: string;


  constructor(id: string, name: string, location: string, organizer: string, coOrganizers: string[], image: string) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.organizer = organizer;
    this.coOrganizers = coOrganizers;
    this.image = image;
  }
}
