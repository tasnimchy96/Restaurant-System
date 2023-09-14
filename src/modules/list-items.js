import loadDescription from './loadDescription.js';

const listItems = async () => {
  const listURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const response = await fetch(listURL);
  const { categories } = await response.json();
  const listDisplay = document.getElementById('menu-items');
  categories.forEach((category) => {
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
        <i id="like-icon" class="fas fa-heart" aria-hidden='true'></i>
        <span id="like-count" class="likes">0 Likes</span>
        </div>
        
     </div> 
    `;

    // Add an event listener to the button
    const button = listItem.querySelector('.btn');
    button.addEventListener('click', () => {
      loadDescription(category.idCategory);
    });

    listDisplay.appendChild(listItem);
  });
};

export default listItems;
