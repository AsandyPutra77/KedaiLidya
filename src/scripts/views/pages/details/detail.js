import UrlParser from '../../../routes/uri-parser';
import DataSource from '../../../network/dataSource';
import { createDetailTemplate } from '../../creator/templates';
import InputReview from '../../../utils/reviews-initiator';
import BtnLikeInitiator from '../../../utils/btn-like-initiator';

const Detail = {
  async render() {
    return `
        <div id="section_details" class="section_details"></div>
        
        <div id="likeButtonContainer" class="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const sectionDetail = document.getElementById('section_details');

    try {
      sectionDetail.innerHTML = '<div class="loading-spinner"></div>';

      const item = await DataSource.detailRestaurant(url.id);
      const { restaurant } = item;

      sectionDetail.innerHTML = createDetailTemplate(restaurant);

      InputReview.addReview(url);

      BtnLikeInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
    } catch (error) {
      sectionDetail.innerHTML = '<p>Failed to fetch restaurant detail. Please try again later.</p>';
    }
  },
};

export default Detail;
