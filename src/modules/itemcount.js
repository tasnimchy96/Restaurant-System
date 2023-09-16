export const fetchData = async () => {
  const likeUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const response = await fetch(likeUrl);
  const data = await response.json();
  return data;
};

const itemCount = () => {
  const items = document.getElementById('items');
  fetchData().then((data) => {
    const result = data.categories;
    items.textContent = result.length;
  });
};

export default itemCount;