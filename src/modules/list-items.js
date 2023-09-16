import loadDescription from './loadDescription.js';
import displayLikes from './displaylikes.js';

const listURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
let categoryId = 0;
const listItems = async () => {
  const response = await fetch(listURL);
  const { categories } = await response.json();
  const listDisplay = document.getElementById('menu-items');

  categories.forEach(async (category) => {
    const listItem = document.createElement('Div');
    listItem.classList.add('menu-item');
    listItem.innerHTML = `
    <div class='meal-img'>
      <h2 class='category-name'>${category.strCategory}</h2>
      <div class='img-container'>
       <img src='${category.strCategoryThumb}' alt='Category thumbnail'/>
       </div>
       <div class='btn-container'>
        <button class='btn' id='${category.idCategory}' >Comments</button>
        <div id='${category.idCategory}" class='likes-count">
        <i id="${category.idCategory}" class="fas fa-heart like-icon" aria-hidden='true'></i>
        <p id="like-count-${category.idCategory}"></p>
        </div>
        </div>
        
     </div> 
    `;
    // eslint-disable-next-line radix
    categoryId = parseInt(category.idCategory);
    displayLikes(categoryId);
    // Add an event listener to the button
    const popUp = document.querySelector('#pop-up');
    const button = listItem.querySelector('.btn');
    button.addEventListener('click', () => {
      loadDescription(category.idCategory);
      popUp.style.display = 'block';
    });

    listDisplay.appendChild(listItem);
    // toggleDisplay(category.idCategory);
  });
};

export default listItems;
