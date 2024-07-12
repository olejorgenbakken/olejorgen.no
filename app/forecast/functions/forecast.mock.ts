import type { Forecast } from './forecast.type';

export const mockForecast: Forecast = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [10, 60.1, 267],
  },
  properties: {
    meta: {
      updated_at: '2024-07-12T18:38:02Z',
      units: {
        air_pressure_at_sea_level: 'hPa',
        air_temperature: 'celsius',
        air_temperature_max: 'celsius',
        air_temperature_min: 'celsius',
        air_temperature_percentile_10: 'celsius',
        air_temperature_percentile_90: 'celsius',
        cloud_area_fraction: '%',
        cloud_area_fraction_high: '%',
        cloud_area_fraction_low: '%',
        cloud_area_fraction_medium: '%',
        dew_point_temperature: 'celsius',
        fog_area_fraction: '%',
        precipitation_amount: 'mm',
        precipitation_amount_max: 'mm',
        precipitation_amount_min: 'mm',
        probability_of_precipitation: '%',
        probability_of_thunder: '%',
        relative_humidity: '%',
        ultraviolet_index_clear_sky: '1',
        wind_from_direction: 'degrees',
        wind_speed: 'm/s',
        wind_speed_of_gust: 'm/s',
        wind_speed_percentile_10: 'm/s',
        wind_speed_percentile_90: 'm/s',
      },
    },
    timeseries: [
      {
        time: '2024-07-12T19:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.1,
              air_temperature: 19,
              air_temperature_percentile_10: 17.6,
              air_temperature_percentile_90: 20.3,
              cloud_area_fraction: 0,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 0,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 14.1,
              fog_area_fraction: 0,
              relative_humidity: 72.9,
              ultraviolet_index_clear_sky: 0.1,
              wind_from_direction: 89.7,
              wind_speed: 0.8,
              wind_speed_of_gust: 4.5,
              wind_speed_percentile_10: 0.2,
              wind_speed_percentile_90: 0.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              air_temperature_max: 17.2,
              air_temperature_min: 12.8,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-12T20:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.2,
              air_temperature: 17.2,
              air_temperature_percentile_10: 15.8,
              air_temperature_percentile_90: 18.6,
              cloud_area_fraction: 0,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 0,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 15,
              fog_area_fraction: 0,
              relative_humidity: 86.5,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 1.4,
              wind_speed: 0.9,
              wind_speed_of_gust: 2.1,
              wind_speed_percentile_10: 0.6,
              wind_speed_percentile_90: 1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 15.5,
              air_temperature_min: 12.6,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-12T21:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.3,
              air_temperature: 15.5,
              air_temperature_percentile_10: 13.8,
              air_temperature_percentile_90: 17.1,
              cloud_area_fraction: 0.1,
              cloud_area_fraction_high: 0.1,
              cloud_area_fraction_low: 0,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 13.3,
              fog_area_fraction: 0,
              relative_humidity: 87.3,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 340.4,
              wind_speed: 1,
              wind_speed_of_gust: 2.4,
              wind_speed_percentile_10: 0.9,
              wind_speed_percentile_90: 1.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 14.3,
              air_temperature_min: 11.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-12T22:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.8,
              air_temperature: 14.3,
              air_temperature_percentile_10: 12.4,
              air_temperature_percentile_90: 16,
              cloud_area_fraction: 0.6,
              cloud_area_fraction_high: 0.5,
              cloud_area_fraction_low: 0,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 12.4,
              fog_area_fraction: 0,
              relative_humidity: 88.8,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 334.1,
              wind_speed: 1,
              wind_speed_of_gust: 2.7,
              wind_speed_percentile_10: 0.9,
              wind_speed_percentile_90: 1.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 13.7,
              air_temperature_min: 11.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-12T23:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1016,
              air_temperature: 13.7,
              air_temperature_percentile_10: 11.7,
              air_temperature_percentile_90: 15.5,
              cloud_area_fraction: 0.1,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 0,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 11.5,
              fog_area_fraction: 0,
              relative_humidity: 88.2,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 339.1,
              wind_speed: 1.1,
              wind_speed_of_gust: 2.5,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 1.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 14.6,
              air_temperature_min: 11.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-13T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1016.1,
              air_temperature: 13.2,
              air_temperature_percentile_10: 11.1,
              air_temperature_percentile_90: 15.1,
              cloud_area_fraction: 6.8,
              cloud_area_fraction_high: 5.9,
              cloud_area_fraction_low: 0.7,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 10.5,
              fog_area_fraction: 0,
              relative_humidity: 85.7,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 316.4,
              wind_speed: 0.9,
              wind_speed_of_gust: 2.3,
              wind_speed_percentile_10: 0.8,
              wind_speed_percentile_90: 1.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 0.5,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_night',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 16.5,
              air_temperature_min: 11.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-13T01:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1016,
              air_temperature: 12.8,
              air_temperature_percentile_10: 10.6,
              air_temperature_percentile_90: 14.8,
              cloud_area_fraction: 49,
              cloud_area_fraction_high: 46.5,
              cloud_area_fraction_low: 3.5,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 9.3,
              fog_area_fraction: 0,
              relative_humidity: 83,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 327.8,
              wind_speed: 1,
              wind_speed_of_gust: 2.2,
              wind_speed_percentile_10: 0.6,
              wind_speed_percentile_90: 1.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'fair_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 2.4,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 18.5,
              air_temperature_min: 11.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-13T02:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.4,
              air_temperature: 12.6,
              air_temperature_percentile_10: 10.2,
              air_temperature_percentile_90: 14.7,
              cloud_area_fraction: 60.4,
              cloud_area_fraction_high: 59,
              cloud_area_fraction_low: 2.5,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 7.8,
              fog_area_fraction: 0,
              relative_humidity: 75.8,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 314,
              wind_speed: 0.5,
              wind_speed_of_gust: 2.5,
              wind_speed_percentile_10: 0.5,
              wind_speed_percentile_90: 1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 2.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              air_temperature_max: 20.2,
              air_temperature_min: 11.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-13T03:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.7,
              air_temperature: 11.7,
              air_temperature_percentile_10: 9.3,
              air_temperature_percentile_90: 13.8,
              cloud_area_fraction: 8.8,
              cloud_area_fraction_high: 0.7,
              cloud_area_fraction_low: 7.9,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 8.9,
              fog_area_fraction: 0,
              relative_humidity: 84.6,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 310.5,
              wind_speed: 0.7,
              wind_speed_of_gust: 1.7,
              wind_speed_percentile_10: 0.5,
              wind_speed_percentile_90: 1.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 2.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              air_temperature_max: 21.8,
              air_temperature_min: 12.6,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-13T04:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.7,
              air_temperature: 12.6,
              air_temperature_percentile_10: 10.2,
              air_temperature_percentile_90: 14.8,
              cloud_area_fraction: 11.1,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 11.1,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 9.4,
              fog_area_fraction: 0,
              relative_humidity: 83.2,
              ultraviolet_index_clear_sky: 0.2,
              wind_from_direction: 324.3,
              wind_speed: 0.8,
              wind_speed_of_gust: 2.4,
              wind_speed_percentile_10: 0.6,
              wind_speed_percentile_90: 1.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 3.6,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 22.5,
              air_temperature_min: 14.6,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-13T05:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.5,
              air_temperature: 14.6,
              air_temperature_percentile_10: 12.2,
              air_temperature_percentile_90: 16.7,
              cloud_area_fraction: 10.4,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 10.3,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 10,
              fog_area_fraction: 0,
              relative_humidity: 77.1,
              ultraviolet_index_clear_sky: 0.5,
              wind_from_direction: 28.6,
              wind_speed: 1.5,
              wind_speed_of_gust: 3.8,
              wind_speed_percentile_10: 0.7,
              wind_speed_percentile_90: 2.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 6.6,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 22.8,
              air_temperature_min: 16.5,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
            },
          },
        },
      },
      {
        time: '2024-07-13T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.4,
              air_temperature: 16.5,
              air_temperature_percentile_10: 14,
              air_temperature_percentile_90: 18.6,
              cloud_area_fraction: 21.4,
              cloud_area_fraction_high: 17.9,
              cloud_area_fraction_low: 4.7,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 9.9,
              fog_area_fraction: 0,
              relative_humidity: 65.7,
              ultraviolet_index_clear_sky: 1.1,
              wind_from_direction: 29.9,
              wind_speed: 2.6,
              wind_speed_of_gust: 6.8,
              wind_speed_percentile_10: 1.6,
              wind_speed_percentile_90: 3.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 6.6,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 23.1,
              air_temperature_min: 18.5,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0.5,
            },
          },
        },
      },
      {
        time: '2024-07-13T07:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.2,
              air_temperature: 18.5,
              air_temperature_percentile_10: 15.9,
              air_temperature_percentile_90: 20.6,
              cloud_area_fraction: 3.7,
              cloud_area_fraction_high: 2.4,
              cloud_area_fraction_low: 1.3,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 11.8,
              fog_area_fraction: 0,
              relative_humidity: 64.3,
              ultraviolet_index_clear_sky: 1.9,
              wind_from_direction: 29.4,
              wind_speed: 2.6,
              wind_speed_of_gust: 7.4,
              wind_speed_percentile_10: 2.2,
              wind_speed_percentile_90: 3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 6.6,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 0.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 23.1,
              air_temperature_min: 20.2,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 2.4,
            },
          },
        },
      },
      {
        time: '2024-07-13T08:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.7,
              air_temperature: 20.2,
              air_temperature_percentile_10: 17.6,
              air_temperature_percentile_90: 22.4,
              cloud_area_fraction: 1.3,
              cloud_area_fraction_high: 0.3,
              cloud_area_fraction_low: 1,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 13.4,
              fog_area_fraction: 0,
              relative_humidity: 64,
              ultraviolet_index_clear_sky: 2.9,
              wind_from_direction: 36.4,
              wind_speed: 2.5,
              wind_speed_of_gust: 7.4,
              wind_speed_percentile_10: 2.4,
              wind_speed_percentile_90: 3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 7.3,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'clearsky_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 23.1,
              air_temperature_min: 21.8,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 2.8,
            },
          },
        },
      },
      {
        time: '2024-07-13T09:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.1,
              air_temperature: 21.8,
              air_temperature_percentile_10: 19.3,
              air_temperature_percentile_90: 24,
              cloud_area_fraction: 13.6,
              cloud_area_fraction_high: 0.2,
              cloud_area_fraction_low: 13.4,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 14.2,
              fog_area_fraction: 0,
              relative_humidity: 61.4,
              ultraviolet_index_clear_sky: 4,
              wind_from_direction: 46.2,
              wind_speed: 2.4,
              wind_speed_of_gust: 7.3,
              wind_speed_percentile_10: 2.4,
              wind_speed_percentile_90: 2.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 11.3,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 1.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 23.2,
              air_temperature_min: 22.5,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 2.8,
            },
          },
        },
      },
      {
        time: '2024-07-13T10:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1013.7,
              air_temperature: 22.5,
              air_temperature_percentile_10: 19.8,
              air_temperature_percentile_90: 24.8,
              cloud_area_fraction: 41.6,
              cloud_area_fraction_high: 0.5,
              cloud_area_fraction_low: 41,
              cloud_area_fraction_medium: 0.8,
              dew_point_temperature: 13.9,
              fog_area_fraction: 0,
              relative_humidity: 57.4,
              ultraviolet_index_clear_sky: 4.8,
              wind_from_direction: 61.1,
              wind_speed: 2.6,
              wind_speed_of_gust: 7.7,
              wind_speed_percentile_10: 2.6,
              wind_speed_percentile_90: 3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 11.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0,
              probability_of_thunder: 3.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 23.2,
              air_temperature_min: 22.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 3.6,
            },
          },
        },
      },
      {
        time: '2024-07-13T11:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1013.2,
              air_temperature: 22.8,
              air_temperature_percentile_10: 20.2,
              air_temperature_percentile_90: 25.2,
              cloud_area_fraction: 73.1,
              cloud_area_fraction_high: 15.7,
              cloud_area_fraction_low: 67.3,
              cloud_area_fraction_medium: 9.1,
              dew_point_temperature: 14,
              fog_area_fraction: 0,
              relative_humidity: 56.4,
              ultraviolet_index_clear_sky: 5.3,
              wind_from_direction: 60.4,
              wind_speed: 2.7,
              wind_speed_of_gust: 7.8,
              wind_speed_percentile_10: 2.6,
              wind_speed_percentile_90: 3.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 11.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 2.3,
              probability_of_thunder: 3.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 23.2,
              air_temperature_min: 22,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 6.6,
            },
          },
        },
      },
      {
        time: '2024-07-13T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.7,
              air_temperature: 23.1,
              air_temperature_percentile_10: 20.6,
              air_temperature_percentile_90: 25.6,
              cloud_area_fraction: 91.9,
              cloud_area_fraction_high: 77,
              cloud_area_fraction_low: 58.1,
              cloud_area_fraction_medium: 7.6,
              dew_point_temperature: 14.6,
              fog_area_fraction: 0,
              relative_humidity: 57.6,
              ultraviolet_index_clear_sky: 5.2,
              wind_from_direction: 61.4,
              wind_speed: 2.7,
              wind_speed_of_gust: 7.8,
              wind_speed_percentile_10: 2.5,
              wind_speed_percentile_90: 3.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 12.7,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 5.1,
              probability_of_thunder: 5.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 23.2,
              air_temperature_min: 21.2,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 6.4,
            },
          },
        },
      },
      {
        time: '2024-07-13T13:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.5,
              air_temperature: 22.7,
              air_temperature_percentile_10: 20.2,
              air_temperature_percentile_90: 25,
              cloud_area_fraction: 99.5,
              cloud_area_fraction_high: 98.4,
              cloud_area_fraction_low: 61.3,
              cloud_area_fraction_medium: 36,
              dew_point_temperature: 14.4,
              fog_area_fraction: 0,
              relative_humidity: 58.3,
              ultraviolet_index_clear_sky: 4.6,
              wind_from_direction: 71.4,
              wind_speed: 3,
              wind_speed_of_gust: 7.9,
              wind_speed_percentile_10: 2.2,
              wind_speed_percentile_90: 3.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 14.1,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 3.1,
              probability_of_thunder: 5.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 23.2,
              air_temperature_min: 20.2,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 4.3,
            },
          },
        },
      },
      {
        time: '2024-07-13T14:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.4,
              air_temperature: 22.9,
              air_temperature_percentile_10: 20.4,
              air_temperature_percentile_90: 25.3,
              cloud_area_fraction: 99.7,
              cloud_area_fraction_high: 99,
              cloud_area_fraction_low: 42.6,
              cloud_area_fraction_medium: 29.1,
              dew_point_temperature: 13.9,
              fog_area_fraction: 0,
              relative_humidity: 56,
              ultraviolet_index_clear_sky: 3.7,
              wind_from_direction: 83.9,
              wind_speed: 2.9,
              wind_speed_of_gust: 8,
              wind_speed_percentile_10: 2.3,
              wind_speed_percentile_90: 3.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 20.6,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0.5,
              probability_of_thunder: 2.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 23.2,
              air_temperature_min: 19.3,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 4.9,
            },
          },
        },
      },
      {
        time: '2024-07-13T15:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012,
              air_temperature: 23.2,
              air_temperature_percentile_10: 21,
              air_temperature_percentile_90: 25.3,
              cloud_area_fraction: 99.6,
              cloud_area_fraction_high: 99.3,
              cloud_area_fraction_low: 27.4,
              cloud_area_fraction_medium: 10.1,
              dew_point_temperature: 13.5,
              fog_area_fraction: 0,
              relative_humidity: 53.8,
              ultraviolet_index_clear_sky: 2.6,
              wind_from_direction: 76.7,
              wind_speed: 2.7,
              wind_speed_of_gust: 7.6,
              wind_speed_percentile_10: 2.4,
              wind_speed_percentile_90: 2.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 25.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 2.4,
              probability_of_thunder: 1.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 22.7,
              air_temperature_min: 18.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 9.2,
            },
          },
        },
      },
      {
        time: '2024-07-13T16:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.5,
              air_temperature: 22.7,
              air_temperature_percentile_10: 20.4,
              air_temperature_percentile_90: 24.9,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 29.5,
              cloud_area_fraction_medium: 14.6,
              dew_point_temperature: 13.1,
              fog_area_fraction: 0,
              relative_humidity: 53.9,
              ultraviolet_index_clear_sky: 1.6,
              wind_from_direction: 79.1,
              wind_speed: 2.5,
              wind_speed_of_gust: 7.3,
              wind_speed_percentile_10: 1.3,
              wind_speed_percentile_90: 2.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 31.5,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 4.4,
              probability_of_thunder: 4.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 22,
              air_temperature_min: 18.3,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 10,
            },
          },
        },
      },
      {
        time: '2024-07-13T17:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.2,
              air_temperature: 22,
              air_temperature_percentile_10: 19.7,
              air_temperature_percentile_90: 24.3,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 17.8,
              cloud_area_fraction_medium: 22.2,
              dew_point_temperature: 14.5,
              fog_area_fraction: 0,
              relative_humidity: 60.8,
              ultraviolet_index_clear_sky: 0.9,
              wind_from_direction: 69.5,
              wind_speed: 1.6,
              wind_speed_of_gust: 6.1,
              wind_speed_percentile_10: 1.1,
              wind_speed_percentile_90: 2.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 35.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0.4,
              probability_of_thunder: 6.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 21.2,
              air_temperature_min: 18.1,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 10,
            },
          },
        },
      },
      {
        time: '2024-07-13T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.8,
              air_temperature: 21.2,
              air_temperature_percentile_10: 19.1,
              air_temperature_percentile_90: 23.3,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 5.1,
              cloud_area_fraction_medium: 3.2,
              dew_point_temperature: 15.7,
              fog_area_fraction: 0,
              relative_humidity: 69.5,
              ultraviolet_index_clear_sky: 0.4,
              wind_from_direction: 34,
              wind_speed: 1.6,
              wind_speed_of_gust: 3.9,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 1.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 55.1,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 0.2,
              probability_of_thunder: 7.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 20.2,
              air_temperature_min: 18,
              precipitation_amount: 0,
              precipitation_amount_max: 0.7,
              precipitation_amount_min: 0,
              probability_of_precipitation: 10.9,
            },
          },
        },
      },
      {
        time: '2024-07-13T19:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.6,
              air_temperature: 20.2,
              air_temperature_percentile_10: 18.1,
              air_temperature_percentile_90: 22.2,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 9.6,
              cloud_area_fraction_medium: 12.1,
              dew_point_temperature: 15.5,
              fog_area_fraction: 0,
              relative_humidity: 72.4,
              ultraviolet_index_clear_sky: 0.1,
              wind_from_direction: 20.3,
              wind_speed: 2.1,
              wind_speed_of_gust: 5.1,
              wind_speed_percentile_10: 0.7,
              wind_speed_percentile_90: 2.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 72.4,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 1.8,
              probability_of_thunder: 4.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 19.3,
              air_temperature_min: 17.5,
              precipitation_amount: 0,
              precipitation_amount_max: 1,
              precipitation_amount_min: 0,
              probability_of_precipitation: 13.3,
            },
          },
        },
      },
      {
        time: '2024-07-13T20:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.4,
              air_temperature: 19.3,
              air_temperature_percentile_10: 17.1,
              air_temperature_percentile_90: 21.4,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 24.2,
              cloud_area_fraction_medium: 35.6,
              dew_point_temperature: 13.9,
              fog_area_fraction: 0,
              relative_humidity: 69.8,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 22.9,
              wind_speed: 2.6,
              wind_speed_of_gust: 6.3,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 2.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 79.4,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 9,
              probability_of_thunder: 3.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 18.7,
              air_temperature_min: 17,
              precipitation_amount: 0,
              precipitation_amount_max: 2.2,
              precipitation_amount_min: 0,
              probability_of_precipitation: 19.7,
            },
          },
        },
      },
      {
        time: '2024-07-13T21:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.4,
              air_temperature: 18.7,
              air_temperature_percentile_10: 16.1,
              air_temperature_percentile_90: 20.9,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 46,
              cloud_area_fraction_medium: 70.7,
              dew_point_temperature: 12.6,
              fog_area_fraction: 0,
              relative_humidity: 67.7,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 39.6,
              wind_speed: 2.2,
              wind_speed_of_gust: 6.9,
              wind_speed_percentile_10: 1.1,
              wind_speed_percentile_90: 3.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 80.5,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 8,
              probability_of_thunder: 1.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 18.3,
              air_temperature_min: 16.4,
              precipitation_amount: 0,
              precipitation_amount_max: 2.6,
              precipitation_amount_min: 0,
              probability_of_precipitation: 21.9,
            },
          },
        },
      },
      {
        time: '2024-07-13T22:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.5,
              air_temperature: 18.3,
              air_temperature_percentile_10: 15.6,
              air_temperature_percentile_90: 20.6,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 67.8,
              cloud_area_fraction_medium: 82.8,
              dew_point_temperature: 12.2,
              fog_area_fraction: 0,
              relative_humidity: 67.1,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 39.2,
              wind_speed: 2.7,
              wind_speed_of_gust: 6.7,
              wind_speed_percentile_10: 1.1,
              wind_speed_percentile_90: 2.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 80.1,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 1.6,
              probability_of_thunder: 7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 18.1,
              air_temperature_min: 15.9,
              precipitation_amount: 0,
              precipitation_amount_max: 2.3,
              precipitation_amount_min: 0,
              probability_of_precipitation: 23.5,
            },
          },
        },
      },
      {
        time: '2024-07-13T23:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.6,
              air_temperature: 18.1,
              air_temperature_percentile_10: 15.5,
              air_temperature_percentile_90: 20.3,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 99.9,
              cloud_area_fraction_low: 71.9,
              cloud_area_fraction_medium: 90.6,
              dew_point_temperature: 12,
              fog_area_fraction: 0,
              relative_humidity: 67.3,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 49,
              wind_speed: 2.2,
              wind_speed_of_gust: 6.7,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 82.1,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 6.4,
              probability_of_thunder: 1.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 18,
              air_temperature_min: 15.5,
              precipitation_amount: 0,
              precipitation_amount_max: 5.2,
              precipitation_amount_min: 0,
              probability_of_precipitation: 27.2,
            },
          },
        },
      },
      {
        time: '2024-07-14T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.4,
              air_temperature: 18,
              air_temperature_percentile_10: 15.5,
              air_temperature_percentile_90: 20.3,
              cloud_area_fraction: 99.9,
              cloud_area_fraction_high: 99.5,
              cloud_area_fraction_low: 44.6,
              cloud_area_fraction_medium: 77.1,
              dew_point_temperature: 12.4,
              fog_area_fraction: 0,
              relative_humidity: 69,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 53.5,
              wind_speed: 2.4,
              wind_speed_of_gust: 5.9,
              wind_speed_percentile_10: 1.7,
              wind_speed_percentile_90: 3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 83.7,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 9,
              probability_of_thunder: 1.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 17.5,
              air_temperature_min: 15.2,
              precipitation_amount: 0,
              precipitation_amount_max: 8.5,
              precipitation_amount_min: 0,
              probability_of_precipitation: 45.6,
            },
          },
        },
      },
      {
        time: '2024-07-14T01:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010,
              air_temperature: 17.5,
              air_temperature_percentile_10: 14.9,
              air_temperature_percentile_90: 19.8,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 8.2,
              cloud_area_fraction_medium: 93.5,
              dew_point_temperature: 11.6,
              fog_area_fraction: 0,
              relative_humidity: 67.4,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 51,
              wind_speed: 2.4,
              wind_speed_of_gust: 6.5,
              wind_speed_percentile_10: 1.4,
              wind_speed_percentile_90: 3.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 87.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0.2,
              precipitation_amount_min: 0,
              probability_of_precipitation: 10.6,
              probability_of_thunder: 5.7,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'lightrain',
            },
            details: {
              air_temperature_max: 17,
              air_temperature_min: 15.2,
              precipitation_amount: 0.9,
              precipitation_amount_max: 10.5,
              precipitation_amount_min: 0.2,
              probability_of_precipitation: 62.8,
            },
          },
        },
      },
      {
        time: '2024-07-14T02:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.8,
              air_temperature: 17,
              air_temperature_percentile_10: 14.3,
              air_temperature_percentile_90: 19.2,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 31.2,
              cloud_area_fraction_medium: 96,
              dew_point_temperature: 12.1,
              fog_area_fraction: 0,
              relative_humidity: 72,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 46.1,
              wind_speed: 2.2,
              wind_speed_of_gust: 6.1,
              wind_speed_percentile_10: 1.6,
              wind_speed_percentile_90: 3.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 98.4,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 0.7,
              precipitation_amount_min: 0,
              probability_of_precipitation: 25.8,
              probability_of_thunder: 2.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 16.4,
              air_temperature_min: 15.2,
              precipitation_amount: 1.7,
              precipitation_amount_max: 10.3,
              precipitation_amount_min: 0.2,
              probability_of_precipitation: 70.2,
            },
          },
        },
      },
      {
        time: '2024-07-14T03:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.6,
              air_temperature: 16.4,
              air_temperature_percentile_10: 13.9,
              air_temperature_percentile_90: 18.5,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 99.8,
              cloud_area_fraction_low: 25.8,
              cloud_area_fraction_medium: 97.3,
              dew_point_temperature: 11.9,
              fog_area_fraction: 0,
              relative_humidity: 73.6,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 38.4,
              wind_speed: 2.7,
              wind_speed_of_gust: 7.2,
              wind_speed_percentile_10: 1.7,
              wind_speed_percentile_90: 3.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 100,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 1.1,
              precipitation_amount_min: 0,
              probability_of_precipitation: 30.5,
              probability_of_thunder: 6.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 16.5,
              air_temperature_min: 15.2,
              precipitation_amount: 2.4,
              precipitation_amount_max: 11.5,
              precipitation_amount_min: 0.2,
              probability_of_precipitation: 72.5,
            },
          },
        },
      },
      {
        time: '2024-07-14T04:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.6,
              air_temperature: 15.9,
              air_temperature_percentile_10: 13.3,
              air_temperature_percentile_90: 18,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 69.8,
              cloud_area_fraction_low: 17.1,
              cloud_area_fraction_medium: 99.9,
              dew_point_temperature: 12.1,
              fog_area_fraction: 0,
              relative_humidity: 77.2,
              ultraviolet_index_clear_sky: 0.2,
              wind_from_direction: 32.2,
              wind_speed: 2.7,
              wind_speed_of_gust: 6.6,
              wind_speed_percentile_10: 1.9,
              wind_speed_percentile_90: 3.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 100,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 1.9,
              precipitation_amount_min: 0,
              probability_of_precipitation: 35.5,
              probability_of_thunder: 8.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 16.8,
              air_temperature_min: 15.2,
              precipitation_amount: 3.6,
              precipitation_amount_max: 12.6,
              precipitation_amount_min: 0.3,
              probability_of_precipitation: 76.2,
            },
          },
        },
      },
      {
        time: '2024-07-14T05:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.9,
              air_temperature: 15.5,
              air_temperature_percentile_10: 12.8,
              air_temperature_percentile_90: 17.7,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 69.2,
              cloud_area_fraction_low: 37.7,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 13.1,
              fog_area_fraction: 0,
              relative_humidity: 84.3,
              ultraviolet_index_clear_sky: 0.5,
              wind_from_direction: 35.5,
              wind_speed: 2.7,
              wind_speed_of_gust: 6.8,
              wind_speed_percentile_10: 1.7,
              wind_speed_percentile_90: 3.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 100,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'lightrain',
            },
            details: {
              precipitation_amount: 0.1,
              precipitation_amount_max: 2.4,
              precipitation_amount_min: 0,
              probability_of_precipitation: 66.7,
              probability_of_thunder: 9.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 16.8,
              air_temperature_min: 15.2,
              precipitation_amount: 4.6,
              precipitation_amount_max: 12.5,
              precipitation_amount_min: 0.5,
              probability_of_precipitation: 80.3,
            },
          },
        },
      },
      {
        time: '2024-07-14T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.9,
              air_temperature: 15.2,
              air_temperature_percentile_10: 12.6,
              air_temperature_percentile_90: 17.5,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 95.8,
              cloud_area_fraction_low: 66.1,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 14.5,
              fog_area_fraction: 0,
              relative_humidity: 94.6,
              ultraviolet_index_clear_sky: 1.1,
              wind_from_direction: 28,
              wind_speed: 2.5,
              wind_speed_of_gust: 6.6,
              wind_speed_percentile_10: 2.3,
              wind_speed_percentile_90: 4.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'heavyrain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 100,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              precipitation_amount: 0.5,
              precipitation_amount_max: 2,
              precipitation_amount_min: 0,
              probability_of_precipitation: 71.2,
              probability_of_thunder: 8.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              air_temperature_max: 16.8,
              air_temperature_min: 15.4,
              precipitation_amount: 6,
              precipitation_amount_max: 12.5,
              precipitation_amount_min: 0.6,
              probability_of_precipitation: 81.1,
            },
          },
        },
      },
      {
        time: '2024-07-14T07:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010,
              air_temperature: 15.4,
              air_temperature_percentile_10: 12.8,
              air_temperature_percentile_90: 17.9,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 93.2,
              cloud_area_fraction_low: 97.9,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 15.1,
              fog_area_fraction: 0,
              relative_humidity: 96.8,
              ultraviolet_index_clear_sky: 1.9,
              wind_from_direction: 41.7,
              wind_speed: 2.7,
              wind_speed_of_gust: 6.7,
              wind_speed_percentile_10: 2.1,
              wind_speed_percentile_90: 3.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 99.2,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              precipitation_amount: 0.8,
              precipitation_amount_max: 2.5,
              precipitation_amount_min: 0,
              probability_of_precipitation: 69.1,
              probability_of_thunder: 1.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              air_temperature_max: 16.8,
              air_temperature_min: 16.2,
              precipitation_amount: 6.4,
              precipitation_amount_max: 12.5,
              precipitation_amount_min: 0.6,
              probability_of_precipitation: 84.3,
            },
          },
        },
      },
      {
        time: '2024-07-14T08:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.9,
              air_temperature: 16.2,
              air_temperature_percentile_10: 13.6,
              air_temperature_percentile_90: 18.8,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 55.3,
              cloud_area_fraction_low: 98.6,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 15.8,
              fog_area_fraction: 0,
              relative_humidity: 96.3,
              ultraviolet_index_clear_sky: 2.9,
              wind_from_direction: 37.7,
              wind_speed: 2.2,
              wind_speed_of_gust: 7.5,
              wind_speed_percentile_10: 2.1,
              wind_speed_percentile_90: 4.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 91.7,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              precipitation_amount: 0.6,
              precipitation_amount_max: 3,
              precipitation_amount_min: 0,
              probability_of_precipitation: 65.1,
              probability_of_thunder: 1.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              air_temperature_max: 16.8,
              air_temperature_min: 15.9,
              precipitation_amount: 6.7,
              precipitation_amount_max: 10.8,
              precipitation_amount_min: 0.7,
              probability_of_precipitation: 87.9,
            },
          },
        },
      },
      {
        time: '2024-07-14T09:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.7,
              air_temperature: 16.5,
              air_temperature_percentile_10: 13.8,
              air_temperature_percentile_90: 19.2,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 0.5,
              cloud_area_fraction_low: 99.2,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 16.1,
              fog_area_fraction: 0,
              relative_humidity: 96.6,
              ultraviolet_index_clear_sky: 3.8,
              wind_from_direction: 27.5,
              wind_speed: 2.2,
              wind_speed_of_gust: 6.5,
              wind_speed_percentile_10: 2,
              wind_speed_percentile_90: 5.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 85.6,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              precipitation_amount: 1.1,
              precipitation_amount_max: 2.8,
              precipitation_amount_min: 0,
              probability_of_precipitation: 63.2,
              probability_of_thunder: 1.9,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              air_temperature_max: 16.8,
              air_temperature_min: 15.9,
              precipitation_amount: 6.7,
              precipitation_amount_max: 9.8,
              precipitation_amount_min: 1,
              probability_of_precipitation: 84.8,
            },
          },
        },
      },
      {
        time: '2024-07-14T10:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.7,
              air_temperature: 16.8,
              air_temperature_percentile_10: 13.9,
              air_temperature_percentile_90: 19.7,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 62.7,
              cloud_area_fraction_low: 100,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 16.4,
              fog_area_fraction: 0,
              relative_humidity: 96.7,
              ultraviolet_index_clear_sky: 4.5,
              wind_from_direction: 23.4,
              wind_speed: 1.9,
              wind_speed_of_gust: 5.7,
              wind_speed_percentile_10: 1.9,
              wind_speed_percentile_90: 5.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 82.5,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              precipitation_amount: 1,
              precipitation_amount_max: 2.1,
              precipitation_amount_min: 0,
              probability_of_precipitation: 64.7,
              probability_of_thunder: 2.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              air_temperature_max: 16.6,
              air_temperature_min: 15.9,
              precipitation_amount: 6.7,
              precipitation_amount_max: 10.3,
              precipitation_amount_min: 0.9,
              probability_of_precipitation: 81.9,
            },
          },
        },
      },
      {
        time: '2024-07-14T11:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.6,
              air_temperature: 16.6,
              air_temperature_percentile_10: 13.9,
              air_temperature_percentile_90: 19.3,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 99.5,
              cloud_area_fraction_low: 98.6,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 16.3,
              fog_area_fraction: 0,
              relative_humidity: 97.2,
              ultraviolet_index_clear_sky: 4.9,
              wind_from_direction: 5.1,
              wind_speed: 1.5,
              wind_speed_of_gust: 5,
              wind_speed_percentile_10: 1.4,
              wind_speed_percentile_90: 4.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'certain',
            },
            details: {
              probability_of_precipitation: 80.7,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              precipitation_amount: 1.3,
              precipitation_amount_max: 2.1,
              precipitation_amount_min: 0,
              probability_of_precipitation: 63.6,
              probability_of_thunder: 1.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              air_temperature_max: 16.5,
              air_temperature_min: 15.9,
              precipitation_amount: 6.1,
              precipitation_amount_max: 13.1,
              precipitation_amount_min: 0.5,
              probability_of_precipitation: 80,
            },
          },
        },
      },
      {
        time: '2024-07-14T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.6,
              air_temperature: 16.3,
              air_temperature_percentile_10: 13.9,
              air_temperature_percentile_90: 18.7,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 99.9,
              cloud_area_fraction_low: 99.6,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 15.9,
              fog_area_fraction: 0,
              relative_humidity: 97.1,
              ultraviolet_index_clear_sky: 4.8,
              wind_from_direction: 10.5,
              wind_speed: 1.6,
              wind_speed_of_gust: 4.2,
              wind_speed_percentile_10: 1.6,
              wind_speed_percentile_90: 3.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rainshowers_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 78.5,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              precipitation_amount: 0.9,
              precipitation_amount_max: 1.5,
              precipitation_amount_min: 0.1,
              probability_of_precipitation: 72.3,
              probability_of_thunder: 4.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              air_temperature_max: 16.5,
              air_temperature_min: 15.9,
              precipitation_amount: 5,
              precipitation_amount_max: 15.7,
              precipitation_amount_min: 0.4,
              probability_of_precipitation: 77.6,
            },
          },
        },
      },
      {
        time: '2024-07-14T13:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.6,
              air_temperature: 16.5,
              air_temperature_percentile_10: 14.1,
              air_temperature_percentile_90: 19,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 93.8,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 16.2,
              fog_area_fraction: 0,
              relative_humidity: 97,
              ultraviolet_index_clear_sky: 4.2,
              wind_from_direction: 2.5,
              wind_speed: 1.5,
              wind_speed_of_gust: 4.4,
              wind_speed_percentile_10: 1.5,
              wind_speed_percentile_90: 3.8,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'heavyrain',
            },
            details: {
              precipitation_amount: 1.1,
              precipitation_amount_max: 1.6,
              precipitation_amount_min: 0.1,
              probability_of_precipitation: 73.6,
              probability_of_thunder: 8.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 16.5,
              air_temperature_min: 15.7,
              precipitation_amount: 4.1,
              precipitation_amount_max: 17.6,
              precipitation_amount_min: 0.2,
              probability_of_precipitation: 70.1,
            },
          },
        },
      },
      {
        time: '2024-07-14T14:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.3,
              air_temperature: 15.9,
              air_temperature_percentile_10: 13.8,
              air_temperature_percentile_90: 18,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 96.7,
              cloud_area_fraction_low: 63.8,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 15.6,
              fog_area_fraction: 0,
              relative_humidity: 97.3,
              ultraviolet_index_clear_sky: 3.3,
              wind_from_direction: 299.9,
              wind_speed: 1.1,
              wind_speed_of_gust: 4,
              wind_speed_percentile_10: 1.1,
              wind_speed_percentile_90: 3.9,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              precipitation_amount: 0.9,
              precipitation_amount_max: 2.5,
              precipitation_amount_min: 0.1,
              probability_of_precipitation: 68.4,
              probability_of_thunder: 9.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 16.5,
              air_temperature_min: 14.8,
              precipitation_amount: 3,
              precipitation_amount_max: 19.4,
              precipitation_amount_min: 0.1,
              probability_of_precipitation: 64.4,
            },
          },
        },
      },
      {
        time: '2024-07-14T15:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.8,
              air_temperature: 16,
              air_temperature_percentile_10: 14,
              air_temperature_percentile_90: 18.1,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 46.8,
              cloud_area_fraction_low: 84.8,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 15.9,
              fog_area_fraction: 0.1,
              relative_humidity: 98.1,
              ultraviolet_index_clear_sky: 2.3,
              wind_from_direction: 260.8,
              wind_speed: 0.8,
              wind_speed_of_gust: 3.3,
              wind_speed_percentile_10: 0.8,
              wind_speed_percentile_90: 3.4,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              precipitation_amount: 0.8,
              precipitation_amount_max: 3.5,
              precipitation_amount_min: 0,
              probability_of_precipitation: 64.9,
              probability_of_thunder: 10.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 16.5,
              air_temperature_min: 14.3,
              precipitation_amount: 2.2,
              precipitation_amount_max: 21.2,
              precipitation_amount_min: 0.1,
              probability_of_precipitation: 62.8,
            },
          },
        },
      },
      {
        time: '2024-07-14T16:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.4,
              air_temperature: 16.5,
              air_temperature_percentile_10: 14.2,
              air_temperature_percentile_90: 18.8,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 41.2,
              cloud_area_fraction_low: 82.9,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 16.2,
              fog_area_fraction: 0,
              relative_humidity: 97.5,
              ultraviolet_index_clear_sky: 1.4,
              wind_from_direction: 276.9,
              wind_speed: 1.2,
              wind_speed_of_gust: 3.9,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 2.9,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              precipitation_amount: 0.6,
              precipitation_amount_max: 4.6,
              precipitation_amount_min: 0,
              probability_of_precipitation: 65.2,
              probability_of_thunder: 7.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 16.3,
              air_temperature_min: 14,
              precipitation_amount: 1.3,
              precipitation_amount_max: 21.5,
              precipitation_amount_min: 0.1,
              probability_of_precipitation: 64.8,
            },
          },
        },
      },
      {
        time: '2024-07-14T17:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.3,
              air_temperature: 16.3,
              air_temperature_percentile_10: 13.9,
              air_temperature_percentile_90: 18.8,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 58.4,
              cloud_area_fraction_low: 66.9,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 16.2,
              fog_area_fraction: 0.1,
              relative_humidity: 98.1,
              ultraviolet_index_clear_sky: 0.8,
              wind_from_direction: 267.4,
              wind_speed: 1.5,
              wind_speed_of_gust: 3.9,
              wind_speed_percentile_10: 1.1,
              wind_speed_percentile_90: 2.4,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              precipitation_amount: 0.4,
              precipitation_amount_max: 4.9,
              precipitation_amount_min: 0,
              probability_of_precipitation: 63.2,
              probability_of_thunder: 6.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'lightrainshowers_day',
            },
            details: {
              air_temperature_max: 16.2,
              air_temperature_min: 14,
              precipitation_amount: 0.7,
              precipitation_amount_max: 19.5,
              precipitation_amount_min: 0.1,
              probability_of_precipitation: 61.3,
            },
          },
        },
      },
      {
        time: '2024-07-14T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.2,
              air_temperature: 16.2,
              air_temperature_percentile_10: 13.9,
              air_temperature_percentile_90: 18.6,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 7.5,
              cloud_area_fraction_low: 52.9,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 16.2,
              fog_area_fraction: 0.3,
              relative_humidity: 98.9,
              ultraviolet_index_clear_sky: 0.3,
              wind_from_direction: 234.8,
              wind_speed: 1.6,
              wind_speed_of_gust: 3.9,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 2.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 70.6,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'lightrain',
            },
            details: {
              precipitation_amount: 0.2,
              precipitation_amount_max: 2.8,
              precipitation_amount_min: 0,
              probability_of_precipitation: 52.5,
              probability_of_thunder: 6.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'lightrainshowers_night',
            },
            details: {
              air_temperature_max: 15.7,
              air_temperature_min: 13,
              precipitation_amount: 0.9,
              precipitation_amount_max: 17.3,
              precipitation_amount_min: 0,
              probability_of_precipitation: 56.1,
            },
          },
        },
      },
      {
        time: '2024-07-14T19:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.1,
              air_temperature: 15.7,
              air_temperature_percentile_10: 13.4,
              air_temperature_percentile_90: 17.9,
              cloud_area_fraction: 99.9,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 56.6,
              cloud_area_fraction_medium: 99.8,
              dew_point_temperature: 15.7,
              fog_area_fraction: 0.7,
              relative_humidity: 99.3,
              ultraviolet_index_clear_sky: 0.1,
              wind_from_direction: 230,
              wind_speed: 1.2,
              wind_speed_of_gust: 3.9,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 3,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 3.1,
              precipitation_amount_min: 0,
              probability_of_precipitation: 45.7,
              probability_of_thunder: 4.6,
            },
          },
        },
      },
      {
        time: '2024-07-14T20:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.2,
              air_temperature: 14.8,
              air_temperature_percentile_10: 13.1,
              air_temperature_percentile_90: 16.6,
              cloud_area_fraction: 98.5,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 61.2,
              cloud_area_fraction_medium: 94.6,
              dew_point_temperature: 14.8,
              fog_area_fraction: 3.4,
              relative_humidity: 99.9,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 208.7,
              wind_speed: 1.3,
              wind_speed_of_gust: 3.3,
              wind_speed_percentile_10: 0.8,
              wind_speed_percentile_90: 3,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 2.9,
              precipitation_amount_min: 0,
              probability_of_precipitation: 43.1,
              probability_of_thunder: 2.2,
            },
          },
        },
      },
      {
        time: '2024-07-14T21:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.3,
              air_temperature: 14.3,
              air_temperature_percentile_10: 12.1,
              air_temperature_percentile_90: 16.4,
              cloud_area_fraction: 91.9,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 68.2,
              cloud_area_fraction_medium: 69.8,
              dew_point_temperature: 14.3,
              fog_area_fraction: 1.7,
              relative_humidity: 99.2,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 215.3,
              wind_speed: 2,
              wind_speed_of_gust: 5,
              wind_speed_percentile_10: 0.8,
              wind_speed_percentile_90: 3.7,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 3.2,
              precipitation_amount_min: 0,
              probability_of_precipitation: 38.3,
              probability_of_thunder: 1.7,
            },
          },
        },
      },
      {
        time: '2024-07-14T22:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.4,
              air_temperature: 14,
              air_temperature_percentile_10: 11.5,
              air_temperature_percentile_90: 16.3,
              cloud_area_fraction: 59.6,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 42.3,
              cloud_area_fraction_medium: 30.2,
              dew_point_temperature: 14,
              fog_area_fraction: 1.2,
              relative_humidity: 98.9,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 205.4,
              wind_speed: 2.5,
              wind_speed_of_gust: 6.2,
              wind_speed_percentile_10: 0.6,
              wind_speed_percentile_90: 2.7,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 2.6,
              precipitation_amount_min: 0,
              probability_of_precipitation: 34.9,
              probability_of_thunder: 0.6,
            },
          },
        },
      },
      {
        time: '2024-07-14T23:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.5,
              air_temperature: 14,
              air_temperature_percentile_10: 11.4,
              air_temperature_percentile_90: 16.3,
              cloud_area_fraction: 36.7,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 16.2,
              cloud_area_fraction_medium: 22,
              dew_point_temperature: 13.7,
              fog_area_fraction: 0.1,
              relative_humidity: 97.2,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 202.8,
              wind_speed: 1.8,
              wind_speed_of_gust: 6.4,
              wind_speed_percentile_10: 0.8,
              wind_speed_percentile_90: 2.3,
            },
          },
          next_1_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              precipitation_amount: 0,
              precipitation_amount_max: 2.3,
              precipitation_amount_min: 0,
              probability_of_precipitation: 33.3,
              probability_of_thunder: 0.1,
            },
          },
        },
      },
      {
        time: '2024-07-15T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009,
              air_temperature: 13,
              air_temperature_percentile_10: 10.3,
              air_temperature_percentile_90: 15.6,
              cloud_area_fraction: 9.9,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 8.7,
              cloud_area_fraction_medium: 1,
              dew_point_temperature: 12.5,
              fog_area_fraction: 0,
              relative_humidity: 95.6,
              ultraviolet_index_clear_sky: 0,
              wind_from_direction: 185.9,
              wind_speed: 1.8,
              wind_speed_of_gust: 4.5,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 2.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 58.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 14.5,
              air_temperature_min: 13,
              precipitation_amount: 0,
              precipitation_amount_max: 1.2,
              precipitation_amount_min: 0,
              probability_of_precipitation: 37.3,
            },
          },
        },
      },
      {
        time: '2024-07-15T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.5,
              air_temperature: 13.9,
              air_temperature_percentile_10: 13.2,
              air_temperature_percentile_90: 14.6,
              cloud_area_fraction: 83.2,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 76.6,
              cloud_area_fraction_medium: 23.4,
              dew_point_temperature: 12.6,
              relative_humidity: 91.1,
              wind_from_direction: 205.4,
              wind_speed: 1.9,
              wind_speed_percentile_10: 1.3,
              wind_speed_percentile_90: 3.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 58.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rainshowers_day',
            },
            details: {
              air_temperature_max: 18.8,
              air_temperature_min: 13.9,
              precipitation_amount: 2,
              precipitation_amount_max: 3.9,
              precipitation_amount_min: 0,
              probability_of_precipitation: 43.1,
            },
          },
        },
      },
      {
        time: '2024-07-15T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1008.8,
              air_temperature: 18.8,
              air_temperature_percentile_10: 15,
              air_temperature_percentile_90: 20.6,
              cloud_area_fraction: 97.7,
              cloud_area_fraction_high: 43,
              cloud_area_fraction_low: 78.1,
              cloud_area_fraction_medium: 35.9,
              dew_point_temperature: 16.4,
              relative_humidity: 84.9,
              wind_from_direction: 169.9,
              wind_speed: 2.7,
              wind_speed_percentile_10: 1.5,
              wind_speed_percentile_90: 4.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrainshowers_day',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 47.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 18.8,
              air_temperature_min: 15.8,
              precipitation_amount: 1.9,
              precipitation_amount_max: 4,
              precipitation_amount_min: 0,
              probability_of_precipitation: 45.1,
            },
          },
        },
      },
      {
        time: '2024-07-15T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.2,
              air_temperature: 16.9,
              air_temperature_percentile_10: 15.6,
              air_temperature_percentile_90: 19.6,
              cloud_area_fraction: 78.9,
              cloud_area_fraction_high: 76.6,
              cloud_area_fraction_low: 3.1,
              cloud_area_fraction_medium: 4.7,
              dew_point_temperature: 14.7,
              relative_humidity: 85.9,
              wind_from_direction: 158.4,
              wind_speed: 2.4,
              wind_speed_percentile_10: 1.1,
              wind_speed_percentile_90: 3.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 17.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              air_temperature_max: 16.9,
              air_temperature_min: 13.3,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 9.8,
            },
          },
        },
      },
      {
        time: '2024-07-16T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.8,
              air_temperature: 13.3,
              air_temperature_percentile_10: 12.2,
              air_temperature_percentile_90: 14.9,
              cloud_area_fraction: 82.4,
              cloud_area_fraction_high: 82.4,
              cloud_area_fraction_low: 0,
              cloud_area_fraction_medium: 1.2,
              dew_point_temperature: 12.6,
              relative_humidity: 94.8,
              wind_from_direction: 154,
              wind_speed: 1.5,
              wind_speed_percentile_10: 0.9,
              wind_speed_percentile_90: 2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 37.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 14.2,
              air_temperature_min: 13.1,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2024-07-16T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.6,
              air_temperature: 14.2,
              air_temperature_percentile_10: 13.6,
              air_temperature_percentile_90: 15.4,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 97.3,
              cloud_area_fraction_low: 90.2,
              cloud_area_fraction_medium: 60.9,
              dew_point_temperature: 12.4,
              relative_humidity: 88.5,
              wind_from_direction: 159.3,
              wind_speed: 1.7,
              wind_speed_percentile_10: 0.8,
              wind_speed_percentile_90: 2.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 58.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 19.3,
              air_temperature_min: 14.2,
              precipitation_amount: 0,
              precipitation_amount_max: 1,
              precipitation_amount_min: 0,
              probability_of_precipitation: 33.3,
            },
          },
        },
      },
      {
        time: '2024-07-16T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.8,
              air_temperature: 19.3,
              air_temperature_percentile_10: 15.5,
              air_temperature_percentile_90: 20.8,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 56.2,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 14.5,
              relative_humidity: 73.2,
              wind_from_direction: 146.8,
              wind_speed: 2.8,
              wind_speed_percentile_10: 2,
              wind_speed_percentile_90: 3.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 80.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 19.3,
              air_temperature_min: 16,
              precipitation_amount: 2.2,
              precipitation_amount_max: 5.5,
              precipitation_amount_min: 0,
              probability_of_precipitation: 49,
            },
          },
        },
      },
      {
        time: '2024-07-16T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011.2,
              air_temperature: 17.1,
              air_temperature_percentile_10: 15.5,
              air_temperature_percentile_90: 19.3,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 99.6,
              cloud_area_fraction_low: 29.7,
              cloud_area_fraction_medium: 97.3,
              dew_point_temperature: 15.7,
              relative_humidity: 90.4,
              wind_from_direction: 122.6,
              wind_speed: 2.2,
              wind_speed_percentile_10: 1.3,
              wind_speed_percentile_90: 3.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 72.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 17.1,
              air_temperature_min: 14.7,
              precipitation_amount: 2.9,
              precipitation_amount_max: 7.9,
              precipitation_amount_min: 0,
              probability_of_precipitation: 56.9,
            },
          },
        },
      },
      {
        time: '2024-07-17T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.8,
              air_temperature: 14.8,
              air_temperature_percentile_10: 12.8,
              air_temperature_percentile_90: 15.6,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 41.4,
              cloud_area_fraction_low: 99.2,
              cloud_area_fraction_medium: 100,
              dew_point_temperature: 14.6,
              relative_humidity: 97.5,
              wind_from_direction: 163.8,
              wind_speed: 1.6,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 2.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 58.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 14.8,
              air_temperature_min: 13.9,
              precipitation_amount: 2.2,
              precipitation_amount_max: 5.9,
              precipitation_amount_min: 0,
              probability_of_precipitation: 45.1,
            },
          },
        },
      },
      {
        time: '2024-07-17T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1010.7,
              air_temperature: 14.6,
              air_temperature_percentile_10: 13.5,
              air_temperature_percentile_90: 15.5,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 96.5,
              cloud_area_fraction_medium: 98,
              dew_point_temperature: 14,
              relative_humidity: 95.3,
              wind_from_direction: 201.7,
              wind_speed: 2.1,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 2.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrainshowers_day',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 51,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 17.3,
              air_temperature_min: 14.6,
              precipitation_amount: 1.8,
              precipitation_amount_max: 4.7,
              precipitation_amount_min: 0,
              probability_of_precipitation: 41.2,
            },
          },
        },
      },
      {
        time: '2024-07-17T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011,
              air_temperature: 17.3,
              air_temperature_percentile_10: 16.1,
              air_temperature_percentile_90: 22.4,
              cloud_area_fraction: 97.7,
              cloud_area_fraction_high: 94.5,
              cloud_area_fraction_low: 42.6,
              cloud_area_fraction_medium: 33.6,
              dew_point_temperature: 14.6,
              relative_humidity: 83.3,
              wind_from_direction: 199,
              wind_speed: 2.8,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 4.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 41.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 19.1,
              air_temperature_min: 17.3,
              precipitation_amount: 0,
              precipitation_amount_max: 1.4,
              precipitation_amount_min: 0,
              probability_of_precipitation: 37.3,
            },
          },
        },
      },
      {
        time: '2024-07-17T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.1,
              air_temperature: 19.1,
              air_temperature_percentile_10: 17.4,
              air_temperature_percentile_90: 21.4,
              cloud_area_fraction: 27,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 3.9,
              cloud_area_fraction_medium: 26.6,
              dew_point_temperature: 13.9,
              relative_humidity: 71.1,
              wind_from_direction: 170.2,
              wind_speed: 2.5,
              wind_speed_percentile_10: 1.3,
              wind_speed_percentile_90: 3.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 11.8,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_night',
            },
            details: {
              air_temperature_max: 19.1,
              air_temperature_min: 13.9,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2024-07-18T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.5,
              air_temperature: 14.1,
              air_temperature_percentile_10: 12.4,
              air_temperature_percentile_90: 15.1,
              cloud_area_fraction: 49.6,
              cloud_area_fraction_high: 3.1,
              cloud_area_fraction_low: 47.7,
              cloud_area_fraction_medium: 12.5,
              dew_point_temperature: 12.7,
              relative_humidity: 90.2,
              wind_from_direction: 244.2,
              wind_speed: 1.7,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 2.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 17.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 14.6,
              air_temperature_min: 12.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2024-07-18T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1015.8,
              air_temperature: 14.6,
              air_temperature_percentile_10: 13.7,
              air_temperature_percentile_90: 15.4,
              cloud_area_fraction: 51.6,
              cloud_area_fraction_high: 30.5,
              cloud_area_fraction_low: 28.9,
              cloud_area_fraction_medium: 3.9,
              dew_point_temperature: 11.9,
              relative_humidity: 83.3,
              wind_from_direction: 203.8,
              wind_speed: 1.5,
              wind_speed_percentile_10: 0.5,
              wind_speed_percentile_90: 2.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 37.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 20.8,
              air_temperature_min: 14.6,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 15.7,
            },
          },
        },
      },
      {
        time: '2024-07-18T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.4,
              air_temperature: 20.8,
              air_temperature_percentile_10: 18.5,
              air_temperature_percentile_90: 23,
              cloud_area_fraction: 71.9,
              cloud_area_fraction_high: 58.6,
              cloud_area_fraction_low: 3.9,
              cloud_area_fraction_medium: 21.1,
              dew_point_temperature: 10.6,
              relative_humidity: 51.8,
              wind_from_direction: 197.6,
              wind_speed: 3.4,
              wind_speed_percentile_10: 1.4,
              wind_speed_percentile_90: 4.7,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 37.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 20.8,
              air_temperature_min: 19.2,
              precipitation_amount: 0,
              precipitation_amount_max: 1,
              precipitation_amount_min: 0,
              probability_of_precipitation: 31.4,
            },
          },
        },
      },
      {
        time: '2024-07-18T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.8,
              air_temperature: 19.3,
              air_temperature_percentile_10: 15.9,
              air_temperature_percentile_90: 21.4,
              cloud_area_fraction: 96.9,
              cloud_area_fraction_high: 45.3,
              cloud_area_fraction_low: 0,
              cloud_area_fraction_medium: 94.5,
              dew_point_temperature: 15.5,
              relative_humidity: 77.5,
              wind_from_direction: 164.3,
              wind_speed: 2.8,
              wind_speed_percentile_10: 1.3,
              wind_speed_percentile_90: 3.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 25.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 19.3,
              air_temperature_min: 14.5,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 17.6,
            },
          },
        },
      },
      {
        time: '2024-07-19T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1014.2,
              air_temperature: 14.6,
              air_temperature_percentile_10: 11.7,
              air_temperature_percentile_90: 15.7,
              cloud_area_fraction: 94.5,
              cloud_area_fraction_high: 0.4,
              cloud_area_fraction_low: 35.5,
              cloud_area_fraction_medium: 91.4,
              dew_point_temperature: 13.8,
              relative_humidity: 94,
              wind_from_direction: 256.1,
              wind_speed: 1.9,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 3.1,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 23.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 15,
              air_temperature_min: 13.4,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 15.7,
            },
          },
        },
      },
      {
        time: '2024-07-19T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1013.9,
              air_temperature: 15,
              air_temperature_percentile_10: 12.8,
              air_temperature_percentile_90: 15.8,
              cloud_area_fraction: 30.9,
              cloud_area_fraction_high: 24.2,
              cloud_area_fraction_low: 0.8,
              cloud_area_fraction_medium: 0,
              dew_point_temperature: 11.7,
              relative_humidity: 79.9,
              wind_from_direction: 245.2,
              wind_speed: 1.6,
              wind_speed_percentile_10: 0.9,
              wind_speed_percentile_90: 2.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 23.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'fair_day',
            },
            details: {
              air_temperature_max: 20.9,
              air_temperature_min: 15,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 13.7,
            },
          },
        },
      },
      {
        time: '2024-07-19T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1013.1,
              air_temperature: 20.9,
              air_temperature_percentile_10: 19.1,
              air_temperature_percentile_90: 22.1,
              cloud_area_fraction: 61.7,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 4.7,
              cloud_area_fraction_medium: 59.8,
              dew_point_temperature: 9.4,
              relative_humidity: 47.6,
              wind_from_direction: 200,
              wind_speed: 2.7,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 17.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 20.9,
              air_temperature_min: 19.9,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 13.7,
            },
          },
        },
      },
      {
        time: '2024-07-19T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1012.6,
              air_temperature: 19.9,
              air_temperature_percentile_10: 17.7,
              air_temperature_percentile_90: 21.1,
              cloud_area_fraction: 47.7,
              cloud_area_fraction_high: 18.4,
              cloud_area_fraction_low: 2.3,
              cloud_area_fraction_medium: 38.3,
              dew_point_temperature: 14.1,
              relative_humidity: 68.6,
              wind_from_direction: 150.4,
              wind_speed: 2.4,
              wind_speed_percentile_10: 1.5,
              wind_speed_percentile_90: 3.2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 17.6,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              air_temperature_max: 19.9,
              air_temperature_min: 13.9,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 9.8,
            },
          },
        },
      },
      {
        time: '2024-07-20T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1013.2,
              air_temperature: 14.1,
              air_temperature_percentile_10: 12,
              air_temperature_percentile_90: 15.9,
              cloud_area_fraction: 60.9,
              cloud_area_fraction_high: 0,
              cloud_area_fraction_low: 60.2,
              cloud_area_fraction_medium: 2.3,
              dew_point_temperature: 11.7,
              relative_humidity: 85,
              wind_from_direction: 254.1,
              wind_speed: 1.7,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 2.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'somewhat certain',
            },
            details: {
              probability_of_precipitation: 23.5,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 14.7,
              air_temperature_min: 12.3,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 7.8,
            },
          },
        },
      },
      {
        time: '2024-07-20T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1013,
              air_temperature: 14.7,
              air_temperature_percentile_10: 13.5,
              air_temperature_percentile_90: 16,
              cloud_area_fraction: 71.9,
              cloud_area_fraction_high: 64.8,
              cloud_area_fraction_low: 7,
              cloud_area_fraction_medium: 12.9,
              dew_point_temperature: 11.6,
              relative_humidity: 81.3,
              wind_from_direction: 248.3,
              wind_speed: 1.3,
              wind_speed_percentile_10: 0.7,
              wind_speed_percentile_90: 2,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrainshowers_day',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 29.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
            },
            details: {
              air_temperature_max: 20.5,
              air_temperature_min: 14.7,
              precipitation_amount: 0,
              precipitation_amount_max: 0,
              precipitation_amount_min: 0,
              probability_of_precipitation: 17.6,
            },
          },
        },
      },
      {
        time: '2024-07-20T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1011,
              air_temperature: 20.5,
              air_temperature_percentile_10: 16.3,
              air_temperature_percentile_90: 21.8,
              cloud_area_fraction: 79.3,
              cloud_area_fraction_high: 10.2,
              cloud_area_fraction_low: 11.7,
              cloud_area_fraction_medium: 75,
              dew_point_temperature: 9.7,
              relative_humidity: 49.6,
              wind_from_direction: 162.5,
              wind_speed: 2.6,
              wind_speed_percentile_10: 1.5,
              wind_speed_percentile_90: 3.6,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'rain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 29.4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rainshowers_day',
            },
            details: {
              air_temperature_max: 20.5,
              air_temperature_min: 19.4,
              precipitation_amount: 1.9,
              precipitation_amount_max: 2.3,
              precipitation_amount_min: 0,
              probability_of_precipitation: 23.5,
            },
          },
        },
      },
      {
        time: '2024-07-20T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1009.3,
              air_temperature: 19.4,
              air_temperature_percentile_10: 15.6,
              air_temperature_percentile_90: 20.8,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 9.8,
              cloud_area_fraction_medium: 53.1,
              dew_point_temperature: 17.9,
              relative_humidity: 90,
              wind_from_direction: 157.3,
              wind_speed: 2.6,
              wind_speed_percentile_10: 1.1,
              wind_speed_percentile_90: 3.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 37.3,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 19.4,
              air_temperature_min: 14.6,
              precipitation_amount: 1.8,
              precipitation_amount_max: 1.8,
              precipitation_amount_min: 0,
              probability_of_precipitation: 19.6,
            },
          },
        },
      },
      {
        time: '2024-07-21T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.7,
              air_temperature: 14.6,
              air_temperature_percentile_10: 12.3,
              air_temperature_percentile_90: 15.5,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 6.6,
              cloud_area_fraction_medium: 91.8,
              dew_point_temperature: 14.4,
              relative_humidity: 97.7,
              wind_from_direction: 154.5,
              wind_speed: 1.7,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 2.4,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 41.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 14.6,
              air_temperature_min: 13.2,
              precipitation_amount: 0,
              precipitation_amount_max: 0.8,
              precipitation_amount_min: 0,
              probability_of_precipitation: 29.4,
            },
          },
        },
      },
      {
        time: '2024-07-21T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1007.3,
              air_temperature: 14.3,
              air_temperature_percentile_10: 13.4,
              air_temperature_percentile_90: 15.5,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 48.4,
              cloud_area_fraction_medium: 76.2,
              dew_point_temperature: 12.7,
              relative_humidity: 89.2,
              wind_from_direction: 201,
              wind_speed: 1.5,
              wind_speed_percentile_10: 0.9,
              wind_speed_percentile_90: 2.5,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'cloudy',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 45.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 19.7,
              air_temperature_min: 14.3,
              precipitation_amount: 0,
              precipitation_amount_max: 0.6,
              precipitation_amount_min: 0,
              probability_of_precipitation: 27.5,
            },
          },
        },
      },
      {
        time: '2024-07-21T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1005.9,
              air_temperature: 19.7,
              air_temperature_percentile_10: 15.8,
              air_temperature_percentile_90: 20.9,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 58.6,
              cloud_area_fraction_medium: 97.7,
              dew_point_temperature: 14.4,
              relative_humidity: 71.2,
              wind_from_direction: 163,
              wind_speed: 2.5,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 3.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'partlycloudy_day',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 45.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 19.7,
              air_temperature_min: 16.7,
              precipitation_amount: 0,
              precipitation_amount_max: 1.1,
              precipitation_amount_min: 0,
              probability_of_precipitation: 31.4,
            },
          },
        },
      },
      {
        time: '2024-07-21T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1005.4,
              air_temperature: 17.3,
              air_temperature_percentile_10: 15.6,
              air_temperature_percentile_90: 19.5,
              cloud_area_fraction: 61.7,
              cloud_area_fraction_high: 21.1,
              cloud_area_fraction_low: 31.2,
              cloud_area_fraction_medium: 35.2,
              dew_point_temperature: 12.6,
              relative_humidity: 73.3,
              wind_from_direction: 157.2,
              wind_speed: 2,
              wind_speed_percentile_10: 1.2,
              wind_speed_percentile_90: 3.3,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 45.1,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'partlycloudy_night',
            },
            details: {
              air_temperature_max: 17.3,
              air_temperature_min: 13.9,
              precipitation_amount: 0,
              precipitation_amount_max: 0.7,
              precipitation_amount_min: 0,
              probability_of_precipitation: 27.5,
            },
          },
        },
      },
      {
        time: '2024-07-22T00:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1004.2,
              air_temperature: 14.1,
              air_temperature_percentile_10: 11.8,
              air_temperature_percentile_90: 16,
              cloud_area_fraction: 100,
              cloud_area_fraction_high: 100,
              cloud_area_fraction_low: 20.3,
              cloud_area_fraction_medium: 84.4,
              dew_point_temperature: 13.2,
              relative_humidity: 93.5,
              wind_from_direction: 64.2,
              wind_speed: 1.6,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 2.8,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 51,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 14.1,
              air_temperature_min: 13.5,
              precipitation_amount: 1.9,
              precipitation_amount_max: 4,
              precipitation_amount_min: 0,
              probability_of_precipitation: 33.3,
            },
          },
        },
      },
      {
        time: '2024-07-22T06:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1004.2,
              air_temperature: 14,
              air_temperature_percentile_10: 12.6,
              air_temperature_percentile_90: 16,
              cloud_area_fraction: 99.2,
              cloud_area_fraction_high: 85.2,
              cloud_area_fraction_low: 76.6,
              cloud_area_fraction_medium: 92.2,
              dew_point_temperature: 13.1,
              relative_humidity: 93.7,
              wind_from_direction: 247.9,
              wind_speed: 1.6,
              wind_speed_percentile_10: 0.9,
              wind_speed_percentile_90: 2.9,
            },
          },
          next_12_hours: {
            summary: {
              symbol_code: 'lightrain',
              symbol_confidence: 'uncertain',
            },
            details: {
              probability_of_precipitation: 41.2,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'cloudy',
            },
            details: {
              air_temperature_max: 18.9,
              air_temperature_min: 14,
              precipitation_amount: 0,
              precipitation_amount_max: 0.6,
              precipitation_amount_min: 0,
              probability_of_precipitation: 25.5,
            },
          },
        },
      },
      {
        time: '2024-07-22T12:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1003.6,
              air_temperature: 18.9,
              air_temperature_percentile_10: 15,
              air_temperature_percentile_90: 21.9,
              cloud_area_fraction: 99.6,
              cloud_area_fraction_high: 98.4,
              cloud_area_fraction_low: 25.8,
              cloud_area_fraction_medium: 94.5,
              dew_point_temperature: 13.7,
              relative_humidity: 71,
              wind_from_direction: 157,
              wind_speed: 2.8,
              wind_speed_percentile_10: 1,
              wind_speed_percentile_90: 4,
            },
          },
          next_6_hours: {
            summary: {
              symbol_code: 'rain',
            },
            details: {
              air_temperature_max: 18.9,
              air_temperature_min: 15.8,
              precipitation_amount: 2,
              precipitation_amount_max: 3.7,
              precipitation_amount_min: 0,
              probability_of_precipitation: 29.4,
            },
          },
        },
      },
      {
        time: '2024-07-22T18:00:00Z',
        data: {
          instant: {
            details: {
              air_pressure_at_sea_level: 1002.7,
              air_temperature: 16.7,
              air_temperature_percentile_10: 14.7,
              air_temperature_percentile_90: 20.6,
              cloud_area_fraction: 96.9,
              cloud_area_fraction_high: 96.9,
              cloud_area_fraction_low: 9.4,
              cloud_area_fraction_medium: 5.5,
              dew_point_temperature: 15.7,
              relative_humidity: 92.5,
              wind_from_direction: 205.9,
              wind_speed: 2,
              wind_speed_percentile_10: 1.3,
              wind_speed_percentile_90: 3.1,
            },
          },
        },
      },
    ],
  },
};
