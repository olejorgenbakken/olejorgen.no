'use client';

import './ThemePicker.css';

export const ThemePicker = () => {
  return (
    <div className="theme-picker">
      <input
        type="range"
        min={0}
        max={360}
        step={10}
        defaultValue={0}
        id="theme-hue"
        name="theme-hue"
        onChange={handleHueSelection}
      />
      <label htmlFor="theme-hue">Velg fargetone</label>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        defaultValue={0}
        id="theme-lightness"
        name="theme-lightness"
        onChange={handleLightnessSelection}
      />
      <label htmlFor="theme-lightness">Velg lyshet</label>
    </div>
  );
};

const handleHueSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
  let root = document.documentElement;
  const hue = event.target.value;
  root.style.setProperty('--hue-accent', hue.toString());
};

const handleLightnessSelection = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  let root = document.documentElement;
  const lightness = event.target.value;
  root.style.setProperty('--lightness', `${lightness}%`);
  root.style.setProperty('--lightness-inverted', `${100 - Number(lightness)}%`);
};
