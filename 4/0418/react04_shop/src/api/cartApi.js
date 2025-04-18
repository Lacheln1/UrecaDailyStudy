import axios from 'axios';

export const getCartData = async () => {
  try {
    const res = await axios.get(`/api/cart`);
    console.log('getCartData.js : getCartData', res);
    return res.data;
  } catch (err) {
    console.log('getCartData.js : getCartData -err', err);
    // throw err
  }
};

export const addToCart = async () => {};
