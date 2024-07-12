import type { Timeseries } from './timeseries.type';
import type { Units } from './units.type';

export type Forecast = {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    meta: {
      updated_at: string;
      units: Units;
    };
    timeseries: Timeseries[];
  };
};
