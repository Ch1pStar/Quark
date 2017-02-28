export * from './emitter';
export * from './initialize';
import Span from './math/Span';

import RectZone from './zone/RectZone';
import PointZone from './zone/PointZone';
import LineZone from './zone/LineZone';
import ImageZone from './zone/ImageZone';
import CircleZone from './zone/CircleZone';

import Alpha from './behaviour/Alpha';
import Attraction from './behaviour/Attraction';
import Collision from './behaviour/Collision';

export function getSpan(a, b, center) {
    return new Span(a, b, center);
}

export { Span, RectZone, PointZone, LineZone, ImageZone, CircleZone };

export { Alpha, Attraction, Collision };

global.Quark = exports;