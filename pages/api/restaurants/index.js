const axios = require('axios');

const url = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

const getRestaurants = async (req, res) => {
  let getRestaurantsResp = null;
  let parsed = null;
  try {
    getRestaurantsResp = await axios.get(`${url}`);
    return res.status(200).json(getRestaurantsResp?.data?.restaurants);
  } catch (error) {
    return res.status(404).json({
      status: 404,
      message: error?.message,
    });
  }
};

export default getRestaurants;
