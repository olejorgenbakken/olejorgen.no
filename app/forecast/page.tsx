import Link from 'next/link';
import { ForecastHour } from './components/ForecastHour';
import { type Timeseries } from './functions';
import { mockForecast } from './functions/forecast.mock';

export default function ForecastPage() {
  const forecast: Timeseries[] = mockForecast.properties.timeseries;
  return (
    <main>
      <header className="slide-up">
        <h1>Test av Yrs API for værmelding</h1>
        <p>
          Foreløpig mockdata. Ikoner fra{' '}
          <Link href="https://icons8.com">Icons8</Link>.
        </p>
      </header>
      <section className="flex-column">
        <h2 className="h3">Været</h2>

        {forecast.map((time) => (
          <ForecastHour
            key={time.time}
            time={time.time}
            details={time.data.instant.details}
          />
        ))}
      </section>
    </main>
  );
}
