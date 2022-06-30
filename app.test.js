import OnLineTvAPI from './src/modules/app.js';

describe('check number of movies and comments', () => {
  const comments = [
    {
      username: 'James Davies',
      creation_date: '2022-04-22',
      comment: 'Very Good',
    },
    {
      username: 'Jennifer Judge',
      creation_date: '2022-04-23',
      comment: 'Wonderful',
    },
  ];

  const movies = [
    {
      id: 230,
      name: 'Fire Man',
    },
    {
      id: 230,
      name: 'Superman',
    },
  ];

  test('Comment Count should be equal to 3', () => {
    const commentCount = OnLineTvAPI.getCommentCount(comments);
    expect(commentCount).toBe(2);
  });

  test('Show Count should be equal to 2', () => {
    const commentCount = OnLineTvAPI.getShowsCounter(movies);
    expect(commentCount).toBe(2);
  });
});
