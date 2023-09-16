import { JSDOM } from 'jsdom';
import { totalComment, commentCount } from './countComment.js';

const createDOM = (html) => {
  const { document } = new JSDOM(html).window;
  global.document = document;
};

describe('totalComment', () => {
  beforeEach(() => {
    createDOM('<ul id="show-comment"><li>Comment 1</li><li>Comment 2</li></ul>');
  });

  it('should return the number of child elements', () => {
    const allComment = totalComment();
    expect(allComment).toBe(2);
  });
});

describe('commentCount', () => {
  it('should return the length of an array', () => {
    const commentList = ['Comment 1', 'Comment 2', 'Comment 3'];
    const totalComment = commentCount(commentList);
    expect(totalComment).toBe(3);
  });

  it('should return 0 when commentList is undefined', () => {
    const commentList = undefined;
    const totalComment = commentCount(commentList);
    expect(totalComment).toBe(0);
  });

  it('should return 0 when commentList is null', () => {
    const commentList = null;
    const totalComment = commentCount(commentList);
    expect(totalComment).toBe(0);
  });

  it('should return 0 when commentList is an empty array', () => {
    const commentList = [];
    const totalComment = commentCount(commentList);
    expect(totalComment).toBe(0);
  });
});
