'use client';

import './ThemePicker.css';

export const ThemePicker = () => {
  return (
    <div className="theme-picker">
      <input
        type="range"
        min="0"
        max="360"
        id="theme-hue"
        name="theme-hue"
        defaultValue={0}
        onChange={handleHueSelection}
      />
      <label htmlFor="theme-hue">Velg hue</label>
      <input
        type="range"
        min="0"
        max="100"
        id="theme-lightness"
        name="theme-lightness"
        defaultValue={0}
        onChange={handleLightnessSelection}
      />
      <label htmlFor="theme-lightness">Velg lightness</label>
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
