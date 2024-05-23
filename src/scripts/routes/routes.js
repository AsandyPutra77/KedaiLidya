import RestaurantItem from '../views/pages/home/home';
import Detail from '../views/pages/details/detail';
import Favorite from '../views/pages/favorite/favorite';

const routes = {
  '/': RestaurantItem,
  '/home': RestaurantItem,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
