
export function randomAToB(a, b, INT) {
  if (!INT)
    return a + Math.random() * (b - a );
  else
    return Math.floor(Math.random() * (b - a)) + a;
}

 export function randomFloating(center, f, INT) {
  return MathUtils.randomAToB(center - f, center + f, INT);
}

export function degreeTransform(a) {
  return a * Math.PI / 180;
}