import fetchComments from './fetchComments.js';

export const totalComment = () => {
  const numberOfComment = document.getElementById('show-comment').children.length;
  return numberOfComment;
};

export const commentCount = (commentList) => commentList?.length ?? 0;

export const commentsCount = async (id) => {
  const commentsCountElement = document.getElementById('commentsCount');

  try {
    const result = await fetchComments(id);

    if (result === undefined || result.length === undefined) {
      commentsCountElement.textContent = 0;
    } else {
      commentsCountElement.textContent = result.length;
    }
  } catch (error) {
    commentsCountElement.textContent = 0;
  }
};

export default commentsCount;
