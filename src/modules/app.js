/* eslint-disable import/no-cycle */
/* eslint-disable comma-dangle */
import OnLineTvAPI from './appUtility.js';
import Display from './display.js';
import Show from './show.js';

export default class DisplayMovies {
  onLineTvAPI = null;

  static involveId = 'MVuGnV1UCcQw08IPSFxh';

  static allLikes = [];

  static async initialize() {
    this.onLineTvAPI = new OnLineTvAPI();
    let shows = await this.onLineTvAPI.getMovies(1);
    this.allLikes = await DisplayMovies.getAllLikes(this.invovleId);

    shows = shows.map((show) => {
      const showlikes = this.allLikes.find(
        (like) => like.item_id === show.id
      ) || { likes: 0, item_id: show.id };
      const myShow = new Show(
        show.id,
        show.name,
        show.image.medium,
        show.summary,
        show.genres,
        show.language,
        showlikes.likes
      );
      return myShow;
    });

    shows = shows.filter((_, i) => i < 25);
    Display.displayShows(shows);
  }

  static async getAllLikes(appId) {
    return this.onLineTvAPI.getAllLikes(appId);
  }

  static async like(showId) {
    const currentLikes = await this.onLineTvAPI.postLike(
      this.involveId,
      showId
    );

    Display.updateLike(showId, currentLikes);
  }

  static async getComments(showId) {
    const comments = await this.onLineTvAPI.getComments(this.involveId, showId);
    return comments;
  }

  static getCommentCount(comments) {
    return comments.length;
  }

  static getShowsCounter(shows) {
    return shows.length;
  }

  static async postComment(showId, username, comment) {
    const response = await this.onLineTvAPI.postComments(
      this.involveId,
      showId,
      username,
      comment
    );
    return response;
  }
}
