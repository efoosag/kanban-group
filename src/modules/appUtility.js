/* eslint-disable comma-dangle */
export default class OnLineTvAPI {
  constructor() {
    this.urlApi1 = 'https://api.tvmaze.com';
    // eslint-disable-next-line operator-linebreak
    this.involvementUrlApi2 =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  }

  async getMovies(page = 1) {
    const response = await fetch(`${this.urlApi1}/shows?page=${page}`, {
      method: 'GET',
    });

    const result = await response.json();
    return result;
  }

  async getLikes(likeId) {
    try {
      const response = await fetch(
        `${this.involvementUrlApi2}/apps/${likeId}/likes`,
        {
          method: 'GET',
        }
      );

      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('no likes');
    } catch (e) {
      return [];
    }
  }

  async getUniqueLike(likeId, showId) {
    const response = await fetch(
      `${this.involvementUrlApi2}/apps/${likeId}/likes`,
      {
        method: 'GET',
      }
    );

    const result = await response.json();
    const myResult = result.find((like) => like.item_id === showId) || {
      likes: 0,
      item_id: showId,
    };

    return myResult.likes;
  }

  async postLike(likeId, showId) {
    await fetch(`${this.involvementAPIBaseUrl}/apps/${likeId}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: showId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const mylikes = await this.getUniqueLike(likeId, showId);

    return mylikes;
  }

  async getComments(likeId, showId) {
    try {
      const commentsResponse = await fetch(
        `${this.involvementAPIBaseUrl}/apps/${likeId}/comments?item_id=${showId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const comments = await commentsResponse.json();
      return comments;
    } catch (e) {
      return [];
    }
  }

  async postComments(likeId, showId, username, comment) {
    const commentsResponse = await fetch(
      `${this.involvementAPIBaseUrl}/apps/${likeId}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: showId,
          username,
          comment,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return commentsResponse;
  }
}
