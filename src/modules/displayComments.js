import postComments from './postComment.js';
import fetchComments from './fetchComments.js';
import { commentsCount } from './countComment.js';

const popupContainer = document.querySelector('#pop-up');

const displayComments = async (id) => {
  const commentsContainer = document.querySelector('.show-comment');
  commentsContainer.textContent = '';
  fetchComments(id).then((result) => {
    if (!Array.isArray(result)) {
      commentsContainer.textContent = 'No comments available';
      return;
    }
    result.forEach((e) => {
      const paragraph = document.createElement('li');
      paragraph.textContent = `(${e.creation_date}) ${e.username}: ${e.comment}`;
      commentsContainer.appendChild(paragraph);
    });
  });
};

popupContainer.addEventListener('click', async (event) => {
  const userName = document.querySelector('#commentator-name').value;
  const userComment = document.querySelector('#comment').value;
  if (event.target.classList.contains('add-comment')) {
    event.preventDefault();
    await postComments(event.target.id, userName, userComment);
    await fetchComments(event.target.id);
    displayComments(event.target.id);
    commentsCount(event.target.id);
  }

  const closeButton = document.querySelector('#closeButton');
  const popUp = document.querySelector('#pop-up');

  closeButton.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
});

export default displayComments;
