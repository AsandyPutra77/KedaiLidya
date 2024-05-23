import API from './config';

const API_ENDPOINT = {
  RESTAURANT_ITEM: `${API.BASE_URL}/list`,
  DETAIL: (id) => `${API.BASE_URL}/detail/${id}`,
  REVIEW: `${API.BASE_URL}/review`,
};

export default API_ENDPOINT;
