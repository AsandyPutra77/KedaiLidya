/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import DataSource from '../../../network/dataSource';
import { createRestaurantItemTemplate } from '../../creator/templates';

const RestaurantItem = {
  async render() {
    return `
        <section class="section_main">
        <div>
          <h2>Selamat Datang di Kedai Lidya !</h2>
          <p>Silahkan jelajahi restoran kesukaan Anda !</p>
        </div>
        </section>
        <div class="section_sort">
          
          <button id="sort_name">Name</button>
          <button id="sort_rating">Rating</button>
        </div>
        <section id="section_container" class="section_container">

        </section>
        `;
  },

  async afterRender() {
    const sectionContainer = document.getElementById('section_container');

    try {
      sectionContainer.innerHTML = '<div class="loading-spinner"></div>';

      const restaurants = await DataSource.restaurantItem();
      this.renderRestaurants(sectionContainer, restaurants);

      document.getElementById('sort_name').addEventListener('click', () => {
        this.sortByName(sectionContainer);
      });

      document.getElementById('sort_rating').addEventListener('click', () => {
        this.sortByRating(sectionContainer);
      });
    } catch (error) {
      console.error('Failed to fetch restaurant items:', error);
      sectionContainer.innerHTML = '<p>Failed to fetch restaurant items. Please try again later.</p>';
    }
  },

  async sortByName(sectionContainer) {
    try {
      const restaurants = await DataSource.restaurantItem();
      const sortedRestaurants = restaurants.sort((a, b) => a.name.localeCompare(b.name));
      this.renderRestaurants(sectionContainer, sortedRestaurants);
    } catch (error) {
      console.error('Failed to fetch restaurant items:', error);
      sectionContainer.innerHTML = '<p>Failed to fetch restaurant items. Please try again later.</p>';
    }
  },

  async sortByRating(sectionContainer) {
    try {
      const restaurants = await DataSource.restaurantItem();
      const sortedRestaurants = restaurants.sort((a, b) => b.rating - a.rating);
      this.renderRestaurants(sectionContainer, sortedRestaurants);
    } catch (error) {
      console.error('Failed to fetch restaurant items:', error);
      sectionContainer.innerHTML = '<p>Failed to fetch restaurant items. Please try again later.</p>';
    }
  },

  renderRestaurants(container, restaurants) {
    container.innerHTML = '';
    restaurants.forEach((restaurant) => {
      container.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantItem;
