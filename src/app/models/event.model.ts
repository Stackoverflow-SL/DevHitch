export class Event {
  id: string;
  title: string;
  dateTime: string;
  image: string;
  organizer: string;
  participants: string[];
  type: string;

  constructor(
    id: string,
    title: string,
    dateTime: string,
    image: string,
    organizer: string,
    participants: string[],
    type: string
  ) {
    this.id = id;
    this.title = title;
    this.dateTime = dateTime;
    this.image = image;
    this.organizer = organizer;
    this.participants = participants;
    this.type = type;
  }
}
