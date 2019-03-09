const env = process.env.NODE_ENV || 'development';

export default {
  // env info
  env,
  baseUri: process.env.API_URL || 'https://tw-frontenders.firebaseio.com/advFlightSearch.json',
};
