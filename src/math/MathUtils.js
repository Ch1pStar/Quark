export function randomAToB(a, b, INT) {
  if (!INT)
    return (a + Math.random() * (b - a ))<<0;
  else
    return Math.floor(Math.random() * (b - a)) + a;
}

export function randomFloating(center, f, INT) {
  return randomAToB(center - f, center + f, INT);
}

export function degreeTransform(a) {
  return a * Math.PI / 180;
}