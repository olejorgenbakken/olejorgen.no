export type Timeseries = {
  time: string;
  data: {
    instant: {
      details: TimeseriesInstantDetails;
    };
    next_12_hours?: {
      summary: TimeseriesIntervalSummary;
      details: TimeseriesIntervalDetails;
    };
    next_1_hours?: {
      summary: TimeseriesIntervalSummary;
      details: TimeseriesIntervalDetails;
    };
    next_6_hours?: {
      summary: TimeseriesIntervalSummary;
      details: TimeseriesIntervalDetails;
    };
  };
};

export type TimeseriesIntervalSummary = {
  symbol_code: string;
  symbol_confidence?: string;
};

export type TimeseriesIntervalDetails = {
  probability_of_precipitation?: number;
  precipitation_amount?: number;
  precipitation_amount_min?: number;
  precipitation_amount_max?: number;
  precipitation_amount_percentile_10?: number;
  precipitation_amount_percentile_90?: number;
  precipitation_type?: string;
  probability_of_thunder?: number;
  air_temperature_max?: number;
  air_temperature_min?: number;
  cloud_area_fraction?: number;
  cloud_area_fraction_high?: number;
};

export type TimeseriesInstantDetails = {
  air_pressure_at_sea_level?: number;
  air_temperature?: number;
  air_temperature_percentile_10?: number;
  air_temperature_percentile_90?: number;
  cloud_area_fraction?: number;
  cloud_area_fraction_high?: number;
  cloud_area_fraction_low?: number;
  cloud_area_fraction_medium?: number;
  dew_point_temperature?: number;
  fog_area_fraction?: number;
  relative_humidity?: number;
  ultraviolet_index_clear_sky?: number;
  wind_from_direction?: number;
  wind_speed?: number;
  wind_speed_of_gust?: number;
  wind_speed_percentile_10?: number;
  wind_speed_percentile_90?: number;
};
