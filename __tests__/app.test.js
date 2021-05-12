import locationData from '../data/location.js';
import weatherData from '../data/weather.js';
import yelpData from '../data/yelp.js';
import { formatLocation, formatWeather, formatYelp } from '../lib/munge-utils.js';

describe('API Data Mung', () => {

  const expectedLocation = [
    {
      formatted_query: 'Pasadena, Los Angeles County, California, USA',
      latitude: '34.1476452',
      longitude: '-118.1444779'
    },
    {
      formatted_query: 'Pasadena, Harris County, Texas, USA',
      latitude: '29.6910625',
      longitude: '-95.2091006'
    },
    {
      formatted_query: 'Pasadena, Newfoundland, Newfoundland and Labrador, Canada',
      latitude: '49.0154455',
      longitude: '-57.5689228705773'
    },
  ];

  const expectedWeather = [
    {
      forecast: 'Broken clouds',
      time: '2021-05-12',
    },
    {
      forecast: 'Few clouds',
      time: '2021-05-13',
    },
    {
      forecast: 'Moderate rain',
      time: '2021-05-14',
    },
  ];

  const expectedYelp = [
    {
      name: 'Howlin\' Ray\'s',
      image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/YiQBbn9bTpDLMCufWigAug/o.jpg',
      price: '$$',
      rating: 4.5,
      url: 'https://www.yelp.com/biz/howlin-rays-los-angeles-3?adjust_creative=vs3ZUpUGd-kK96jk2mkmRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=vs3ZUpUGd-kK96jk2mkmRA'
    },
    {
      name: 'Daikokuya Little Tokyo',
      image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/GG71SxFbzBd9-SRMRtB1EQ/o.jpg',
      price: '$$',
      rating: 4.0,
      url: 'https://www.yelp.com/biz/daikokuya-little-tokyo-los-angeles?adjust_creative=vs3ZUpUGd-kK96jk2mkmRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=vs3ZUpUGd-kK96jk2mkmRA'
    },
    {
      name: 'Wurstküche',
      image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/gzEMY8RZP2oIBnUMs1-76w/o.jpg',
      price: '$$',
      rating: 4.0,
      url: 'https://www.yelp.com/biz/wurstk%C3%BCche-los-angeles-2?adjust_creative=vs3ZUpUGd-kK96jk2mkmRA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=vs3ZUpUGd-kK96jk2mkmRA'
    }
  ];

  it('munges location data', async () => {
    const output = formatLocation(locationData);
    expect(output).toEqual(expectedLocation);
  });

  it('munges weather data', async () => {
    const output = formatWeather(weatherData);
    expect(output).toEqual(expectedWeather);
  });
  
  it('munges yelp data', async () => {
    const output = formatYelp(yelpData);
    expect(output).toEqual(expectedYelp);
  });
});