import DataSource from '../network/dataSource';
import { createReviewTemplate } from '../views/creator/templates';

const InputReview = {
  addReview(url) {
    const submitReview = document.querySelector('#submit');
    submitReview.addEventListener('click', async (event) => {
      const userReview = document.querySelector('#user_review').value;
      const textReview = document.querySelector('#review_area').value;
      event.preventDefault();

      const reviewValue = {
        id: url.id,
        name: userReview,
        review: textReview,
      };

      const response = await DataSource.addingReview(reviewValue);
      const content = document.querySelector('#content_review');

      content.innerHTML = createReviewTemplate(response.customerReviews);
    });
  },
};

export default InputReview;
