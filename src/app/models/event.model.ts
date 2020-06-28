export class Event {
  title: String;
  dateTime: String;
  image: String;
  organizer: String;
  participantsCount: Number;
  type: String;

  constructor(
    title: String,
    dateTime: String,
    image: String,
    organizer: String,
    participantsCount: Number,
    type: String
  ) {
    this.title = title;
    this.dateTime = dateTime;
    this.image = image;
    this.organizer = organizer;
    this.participantsCount = participantsCount;
    this.type = type;
  }
}
