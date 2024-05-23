/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import ButtonLikeIniator from '../src/scripts/utils/btn-like-initiator';
import idb from '../src/scripts/network/restaurantIdb';

describe('Liking A Restaurant Card', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await ButtonLikeIniator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: 1,
          },
        });
        expect(
          document.querySelector('[aria-label="favorite restaurant"]'),
        ).toBeTruthy();
    });

    it('should show the unlike button when the restaurant has been liked before', async () => {
        await ButtonLikeIniator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: 1,
          },
        });
        expect(
          document.querySelector('[aria-label="unfavorite restaurant"]'),
        ).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await ButtonLikeIniator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: 1,
          },
        });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await idb.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });
        await idb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already liked', async () => {
        await ButtonLikeIniator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: 1,
          },
        });
        await idb.putRestaurant({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await idb.getAllRestaurants()).toEqual([{ id: 1 }]);
        await idb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await ButtonLikeIniator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {},
        });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await idb.getAllRestaurants()).toEqual([]);
    });
});
