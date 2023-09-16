import fetchLikes from './fetchlike.js';
import postLikes from './postlikes.js';

const menuItems = document.getElementById('menu-items');

const displayLikes = async (idCategory) => {
  fetchLikes().then((result) => {
    const likeResult = result.find((items) => items.item_id === idCategory);
    let likesCount = 0;
    if (likeResult) {
      likesCount = likeResult.likes;
    }

    const likecontainer = document.getElementById(`like-count-${idCategory}`);
    likecontainer.textContent = `${likesCount}  Likes`;
  });
};

const handleLikeBtn = () => {
  menuItems.addEventListener('click', async (event) => {
    if (event.target.classList.contains('like-icon')) {
      const parentID = parseInt(event.target.id, 10);
      event.target.style.color = 'red';
      await postLikes(parentID);
      await displayLikes(parentID);
    }
  });
};

handleLikeBtn();

export default displayLikes;