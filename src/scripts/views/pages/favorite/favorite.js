import RestaurantIdb from '../../../network/restaurantIdb';
import { createRestaurantItemTemplate } from '../../creator/templates';

const Favorite = {
  async render() {
    return `
      <div id="section_container" class="section_container"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantIdb.getAllRestaurants();
    const sectionLikes = document.querySelector('#section_container');

    restaurants.forEach((restaurant) => {
      sectionLikes.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
