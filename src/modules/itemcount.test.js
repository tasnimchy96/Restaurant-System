/* eslint-disable import/no-extraneous-dependencies */
import { JSDOM } from 'jsdom';
import itemCount from './itemcount.js';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;

jest.mock('./itemcount.js', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve([1, 2, 3])),
}));

test('itemCount updates text content with the length of fetched data', async () => {
  const items = { textContent: '3' };
  document.getElementById = jest.fn(() => items);

  await itemCount();

  expect(items.textContent.toString()).toBe('3');
});