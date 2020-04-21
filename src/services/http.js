import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/',
  timeout: 30000,
  headers: {
    'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
    'x-rapidapi-key': 'ZTVuSKDSyQmshcEvrxQghuPrLxtEp1gP2qAjsn6ts4nPHCxkHI',
  },
});

export default instance;
