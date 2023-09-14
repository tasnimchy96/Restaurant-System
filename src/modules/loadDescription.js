const loadDescription = async (id) => {
  const request = new Request(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const response = await fetch(request);
  const data = await response.json();
  console.log(id)
  console.log(data.categories[id - 1]);
  // console.log(this.id);
  const popUp = document.querySelector("#pop-up");
  popUp.innerHTML = `<div class="pop-up-image"><img src="${data.categories[id - 1].strCategoryThumb}" alt="" /></div>
      <div class="pop-up-details">
        <div>
          <h2>Description</h2>
          <p>${data.categories[id-1].strCategoryDescription}</p>
        </div>
        <div id="add-comment">
          <h2>Add Your Comment</h2>
          <form action="" id="comment-form">
            <input type="text" id="commentator-name"/>
            <input type="text" id="comment"/>
            <button type="submit" id="comment-btn">Comment</button>
          </form>
        </div>
      </div>`;
};

export default loadDescription;
