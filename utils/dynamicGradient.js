// utils/dynamicGradient.ts
function getRandomHSLColor() {
  const h = Math.floor(Math.random() * 360);
  const s = 70 + Math.random() * 20; // saturation: 70-90%
  const l = 40 + Math.random() * 20; // lightness: 40-60%
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function generateRandomGradient() {
  const color1 = getRandomHSLColor();
  const color2 = getRandomHSLColor();
  const color3 = getRandomHSLColor();

  return `linear-gradient(to bottom right, ${color1}, ${color2}, ${color3})`;
}
