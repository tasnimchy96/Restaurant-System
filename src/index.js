import './style.css';
import listItems from './modules/list-items.js';
import itemCount from './modules/itemcount.js';

document.addEventListener('DOMContentLoaded', () => {
  itemCount();
  listItems();
});