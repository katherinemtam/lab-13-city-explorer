import locationData from '../data/location.js';
import weatherData from '../data/weather.js';
import { formatLocation, formatWeather } from '../lib/munge-utils.js';

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

  it('munges location data', async () => {
    const output = formatLocation(locationData);
    expect(output).toEqual(expectedLocation);
  });

  it('munges weather data', async () => {
    const output = formatWeather(weatherData);
    expect(output).toEqual(expectedWeather);
  });
});