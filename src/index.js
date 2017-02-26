export * from './emitter';
export * from './initialize';
import Span from './math/Span';

export function getSpan(a, b, center) {
    return new Span(a, b, center);
}

export { Span };

global.Quark = exports;