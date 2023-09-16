import displayComments from './displayComments.js';
import { commentsCount } from './countComment.js';

const popUp = document.querySelector('#pop-up');

const loadDescription = async (id) => {
  const request = new Request(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  const response = await fetch(request);
  const data = await response.json();
  popUp.innerHTML = `
  <button class="close-button" id="closeButton">&times;</button>
  <div class="pop-up-image"><img src="${
  data.categories[id - 1].strCategoryThumb
}" alt="" /></div>
      <div class="pop-up-details">
        <div>
          <h2>Description</h2>
          <p>${data.categories[id - 1].strCategoryDescription}</p>
        </div>
        <div id="add-comment-form">
          <h2>Add Your Comment</h2>
          <form action="" id="comment-form">
            <input type="text" id="commentator-name" placeholder="Your Name"/>
            <input type="text" id="comment" placeholder="Your Comment"/>
            <button type="submit" id="${
  data.categories[id - 1].idCategory
}" class="add-comment">Comment</button>
          </form>
        </div>
        <h4>Comments:  (<span class="comments-count" id="commentsCount"></span>)</h4> 
        <ul class="show-comment id="show-comment">

          </ul>
      </div>`;

  commentsCount(data.categories[id - 1].idCategory);
  displayComments(data.categories[id - 1].idCategory);
};

// const closeButton = document.getElementById("closeButton");
// const popUp = document.querySelector("#pop-up");
// closeButton.addEventListener("click", () => {
//   //  loadDescription(category.idCategory);
//   popUp.style.display = "none";
// });

export default loadDescription;
