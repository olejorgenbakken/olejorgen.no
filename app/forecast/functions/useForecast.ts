import { mockForecast } from './forecast.mock';
import type { Forecast } from './forecast.type';

export async function useForecast(lat: number = 60, lon: number = 9.58) {
  const forecast: Forecast = mockForecast;

  return forecast;
}
