/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import ButtonLikeIniator from '../src/scripts/utils/btn-like-initiator';
import idb from '../src/scripts/network/restaurantIdb';

describe('Disliking A Restaurant Card', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await idb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await idb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await ButtonLikeIniator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unfavorite restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await ButtonLikeIniator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="favorite restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await ButtonLikeIniator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    document.querySelector('[aria-label="unfavorite restaurant"]').dispatchEvent(new Event('click'));
    expect(await idb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await ButtonLikeIniator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    await idb.deleteRestaurant(1);
    document.querySelector('[aria-label="unfavorite restaurant"]').dispatchEvent(new Event('click'));
    expect(await idb.getAllRestaurants()).toEqual([]);
  });
});
