import { likeUrl } from './likeApi.js';

const postLikes = async (idCategory) => {
  await fetch(likeUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: idCategory }),
  });
};

export default postLikes;