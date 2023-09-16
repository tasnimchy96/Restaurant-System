import { involvementUrl, involvementApiKey } from './usedApi.js';

const commentURL = `${involvementUrl}${involvementApiKey}/comments`;

const fetchComments = async (id) => {
  const response = await fetch(`${commentURL}?item_id=${id}`);
  const result = await response.json();
  return result;
};

export default fetchComments;