const createRestaurantItemTemplate = (item) => `
<div id=${item.id} class="restaurant_item">
<div class="item_details">
      <img src="https://restaurant-api.dicoding.dev/images/small/${item.pictureId}" alt="${item.name}">
      <h3 class="restaurant_name">${item.name || '-'}</h3>
      <p>${item.description}</p>
      <span>City: ${item.city}</span>
      <span>Rating: ${item.rating}</span>
      <a href="${`/#/detail/${item.id}`}"><button>Lihat Review !</button></a>
    </div>
</div>
`;

const createReviewTemplate = (review) => {
  let reviewItem = '';
  if (review === null) {
    reviewItem += '<h3>Belum ada ulasan</h3>';
  } else {
    review.forEach((item) => {
      reviewItem += `
      <div class="reviewer_container">
      <p class="bold">${item.name}</p>
      <p class="italic">"${item.review}"</p>
      <p>Dibuat pada: ${item.date}</p>
      </div>
      `;
    });
  }
  return reviewItem;
};

const createFormReviewTemplate = () => `
    <label for="Nama">Nama</label>
        <input
            type="text"
            name="user_review"
            id="user_review"
            placeholder="Nama"
            minlength="1"
            required
        />

    <label for="comment">Comment</label>
        <textarea
            name="review_area"
            id="review_area"
            cols="30"
            rows="10"
            placeholder="Silahkan tulis komentar Anda terkait Restaurant tersebut"
            required
        ></textarea>

    <button type="button" id="submit" class="submit">Kirim Ulasan</button>
`;

const createMenuTemplate = (menus) => {
  let menuItem = '';
  menus.forEach((item) => {
    menuItem += `
    <li>${item.name}</li>
    `;
  });
  return menuItem;
};

const createDetailTemplate = (restaurant) => `
<div class="restaurant_info">
<img class="lazyload" src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}">
    
    <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
            <span>Address: ${restaurant.address}</span>
            <span>City: ${restaurant.city}</span>

            <span>Menu Makanan:</span>
        <ul>
            ${createMenuTemplate(restaurant.menus.foods)}
        </ul>
            <span>Menu Minuman:</span>
        <ul>
            ${createMenuTemplate(restaurant.menus.drinks)}
        </ul>

        <h3>Berikan Ulasan</h3>
            ${createFormReviewTemplate()}

        <h3>Ulasan Pelanggan</h3>
        
        <div id="content_review" class="content_review">
        ${createReviewTemplate(restaurant.customerReviews)}
        </div>
    </div>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="favorite restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unfavorite restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
  createFormReviewTemplate,
};
