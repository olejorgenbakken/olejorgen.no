'use client';

import './ThemePicker.css';

export const ThemePicker = () => {
  const handleColorSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    let root = document.documentElement;
    const hue = findHueOfRGB(
      splitHexColorChannels(event.target.value).r,
      splitHexColorChannels(event.target.value).g,
      splitHexColorChannels(event.target.value).b
    );

    root.style.setProperty('--hue-accent', hue.toString());
  };

  return (
    <label
      htmlFor="theme-picker"
      className="theme-picker">
      <input
        type="color"
        id="theme-picker"
        onChange={handleColorSelection}
      />
      Velg fargetema
    </label>
  );
};

const splitHexColorChannels = (hex: string) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
};

const findHueOfRGB = (r: number, g: number, b: number) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let hue = 0;

  if (max === min) {
    hue = 0;
  } else if (max === r) {
    hue = (60 * (g - b)) / (max - min);
  } else if (max === g) {
    hue = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    hue = 60 * (4 + (r - g) / (max - min));
  }

  if (hue < 0) {
    hue += 360;
  }

  return hue;
};
