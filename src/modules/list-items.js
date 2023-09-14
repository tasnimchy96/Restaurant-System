import loadDescription from './loadDescription.js';

const getlikesData = async () => {
  const listURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/W7CFtVOigOGWGZMxlOHJ/likes/';
  const response = await fetch(listURL);
  const likesData = await response.json();
  return likesData;
};

const listItems = async () => {
  const listURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const response = await fetch(listURL);
  const { categories } = await response.json();
  const listDisplay = document.getElementById('menu-items');

  categories.forEach(async (category) => {
    const appId = 'W7CFtVOigOGWGZMxlOHJ';
    const likesData = await getlikesData(appId, category.idCategory);
    const likeCount = likesData.length > 0 ? likesData[0].likes : 0;
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
        <span id="like-count-${category.idCategory}" class="likes">0 Like</span>

        </div>
        
     </div> 
    `;

    const likeCountElement = listItem.querySelector(`#like-count-${category.idCategory}`);
    likeCountElement.textContent = `${likeCount} like${likeCount !== 1 ? 's' : ''}`;

    // Add an event listener to the button
    const button = listItem.querySelector('.btn');
    button.addEventListener('click', () => {
      loadDescription(category.idCategory);
    });

    listDisplay.appendChild(listItem);
  });
};

export default listItems;
