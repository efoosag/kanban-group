/* eslint-disable comma-dangle */
export default class Show {
  constructor(
    showId,
    showTitle,
    image,
    summary,
    genres,
    language,
    likes = 0,
    comments = []
  ) {
    this.id = showId;
    this.title = showTitle;
    this.image = image;
    this.summary = summary;
    this.genres = genres;
    this.language = language;
    this.likes = likes;
    this.comments = comments;
  }

  //   getLikes() {}
}
