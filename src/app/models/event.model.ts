export class Event {
  id: String;
  title: String;
  dateTime: String;
  image: String;
  organizer: String;
  participantsCount: Number;
  type: String;

  constructor(
    id: String,
    title: String,
    dateTime: String,
    image: String,
    organizer: String,
    participantsCount: Number,
    type: String
  ) {
    this.id = id;
    this.title = title;
    this.dateTime = dateTime;
    this.image = image;
    this.organizer = organizer;
    this.participantsCount = participantsCount;
    this.type = type;
  }
}
