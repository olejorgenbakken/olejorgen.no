import { formatDateTime } from '../../features/utils';
import { type TimeseriesInstantDetails } from '../functions/timeseries.type';
import { ForecastDetail } from './ForecastDetail';

import './ForecastHour.css';

export const ForecastHour = ({
  time,
  details,
}: {
  time: string;
  details: TimeseriesInstantDetails;
}) => {
  const {
    air_temperature,
    wind_speed,
    wind_from_direction,
    wind_speed_of_gust,
    dew_point_temperature,
    fog_area_fraction,
    relative_humidity,
    ultraviolet_index_clear_sky,
    cloud_area_fraction,
    air_pressure_at_sea_level,
  } = details;
  const relativeTime = formatDateTime(new Date(time), 'relative');
  const date = formatDateTime(new Date(time), 'hour');
  return (
    <div className="forecast-hour flex flex-column">
      <header>
        <h3 className="h5">{relativeTime}</h3>
        <time>{date}</time>
      </header>
      <div className="flex flex-row details">
        <ForecastDetail
          icon="Temperature"
          label="Temperatur"
          value={`${air_temperature}°C`}
          color="red"
        />
        <ForecastDetail
          icon="UV"
          label="UV-indeks"
          value={`${ultraviolet_index_clear_sky}`}
          color="yellow"
        />
        <ForecastDetail
          icon="Dew Point"
          label="Duggpunkt"
          value={`${dew_point_temperature}°C`}
          color="green"
        />
        <ForecastDetail
          icon="Moisture"
          label="Luftfuktighet"
          value={`${relative_humidity}%`}
          color="purple"
        />
        <ForecastDetail
          icon="Wind"
          label="Vind"
          value={`${wind_speed} m/s, ${wind_from_direction}°`}
          color="blue"
        />
        <ForecastDetail
          icon="Wind"
          label="Vindkast"
          value={`${wind_speed_of_gust} m/s`}
        />
        <ForecastDetail
          icon="Fog"
          label="Tåke"
          value={`${fog_area_fraction}%`}
          color="yellow"
        />

        <ForecastDetail
          icon="Clouds"
          label="Skydekke"
          value={`${cloud_area_fraction}%`}
          color="blue"
        />
        <ForecastDetail
          icon="Pressure gauge"
          label="Lufttrykk"
          value={`${air_pressure_at_sea_level} hPa`}
          color="green"
        />
      </div>
    </div>
  );
};
