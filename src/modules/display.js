/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-cycle */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
import DisplayMovies from './app.js';
import commentModal from './commentModal.js';

export default class Display {
  static displayShows(shows) {
    const movieSection = document.querySelector('.work-section');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < shows.length; i++) {
      const movieList = document.createElement('li');
      movieList.classList.add('work-cards');
      movieList.innerHTML += `<div class="work-box">
          <img
            class="work-img"
            src="${shows[i].image}"
            alt="movie image"
          />
          <div class="card-body">
            <div class="work-title">
              <p class="work-para">${shows[i].title}</p>
            </div>
            <div class="work-rating">
              <div class="rate">
              <img class='likebutton' src='https://img.icons8.com/ios-filled/50/000000/hearts.png'>
              <span id='likes_${shows[i].id}'>${shows[i].likes} ${
        shows[i].likes <= 1 ? 'Like' : 'Likes'
      }</span>
              </div>
              <div class="rate">
                <i class="fa-regular fa-star likebutto"></i>
                <div class="star_title"><span>Stars</span></div>
              </div>
            </div>
            <div class="button">
            <button id='comment_${
              shows[i].id
            }' class='btn btn-primary btn-md card-comment-btn comments'>Comments</button>
              
            </div>
          </div>
        </div>`;
      movieSection.append(movieList);
    }

    document.querySelector(
      '.show-count'
    ).innerHTML = `Number of Shows: ${shows.length}`;

    document.querySelectorAll('.comments').forEach((commentBtn) =>
      commentBtn.addEventListener('click', (ev) => {
        commentModal(ev.target.id.split('_')[1], shows);
      })
    );

    document.querySelectorAll('.likebutton').forEach((likeBtn, i) =>
      likeBtn.addEventListener('click', () => {
        DisplayMovies.like(shows[i].id);
      })
    );

    document
      .querySelector('#post-comment-form')
      .addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const username = ev.target.elements.username.value.trim();
        const comment = ev.target.elements.comment.value.trim();
        const showID = ev.target.elements.show_id.value.trim();

        if (username === '' || comment === '') return;

        await DisplayMovies.postComment(
          parseInt(showID, 10),
          username,
          comment
        );

        ev.target.elements.username.value = '';
        ev.target.elements.comment.value = '';

        const comments = await DisplayMovies.getComments(parseInt(showID, 10));
        Display.updateCommentList(comments);
      });
  }

  static updateLike(showId, currentLikes) {
    const likeSpan = document.querySelector(`#likes_${showId}`);
    likeSpan.textContent = `${currentLikes} ${
      currentLikes <= 1 ? 'Like' : 'Likes'
    }`;
  }

  static updateCommentList(comments) {
    const commentsListEl = document.querySelector('#comment-list');

    commentsListEl.innerHTML = '';
    comments.forEach((comment) => {
      commentsListEl.innerHTML += `<li>${comment.creation_date}:<p> ${comment.comment}</p> - By: ${comment.username}</li>`;
    });

    const commentModalView = document.getElementById('comment-modal');
    const commentCounter = commentModalView.querySelector(
      '.comments #comment-counter'
    );
    commentCounter.textContent = comments.length;
  }
}
