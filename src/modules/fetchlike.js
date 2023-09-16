import { likeUrl } from './likeApi.js';

const fetchLikes = async () => {
  const response = await fetch(likeUrl);
  const result = await response.json();
  return result;
};

export default fetchLikes;
